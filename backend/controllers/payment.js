const crypto = require("crypto");
const axios = require("axios");
const CryptoJS = require("crypto-js");
require("dotenv").config();

function generatedTranscId() {
  return "T" + Date.now();
}

function encodeBase64(str) {
  const string = String(str);
  const buffer = Buffer.from(string);
  const base64 = buffer.toString("base64");
  return base64;
}

function sha256(str) {
  const string = String(str);
  const hash = crypto.createHash("sha256");
  hash.update(string);
  const digest = hash.digest("hex");
  return digest;
}

function generateXVerify(apiEndpoint, encodedRequest) {
  console.log(process.env.PHONEPE_SALT, process.env.PHONEPE_SALT_INDEX);
  return (
    sha256(encodedRequest + apiEndpoint + process.env.PHONEPE_SALT) +
    "###" +
    process.env.PHONEPE_SALT_INDEX
  );
}

exports.abcd = async (req, res) => {
  console.log(req.body);

  try {
    const price = 10;

    const data = {
      merchantId: "WEPEDIATRICSONLINE",
      merchantTransactionId: generatedTranscId(),
      merchantUserId: "MUID" + "iasuhfdjksfh",
      name: "Kasjh",
      amount: price * 100,
      redirectUrl: `http://localhost:3000/payment/status/${generatedTranscId()}`,
      redirectMode: "POST",
      mobileNumber: 9958486923,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };
    const payload = JSON.stringify(data);
    const payloadMain = Buffer.from(payload).toString("base64");

    const key = "78b8b52d-8bcc-4422-9f55-ac3460826c8b";
    const keyIndex = 1;
    const string = payloadMain + "/pg/v1/pay" + key;

    const sha256 = CryptoJS.SHA256(string).toString();
    const checksum = sha256 + "###" + keyIndex;

    const prod_URL = "https://www.wepediatrics.com/apis/hermes/pg/v1/pay";
    const requestData = {
      method: "POST",
      url: prod_URL,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
      },
      data: {
        request: payloadMain,
      },
    };

    axios
      .request(requestData)
      .then(async function (response) {
        const phonePeTransactionId = response.data.merchantTransactionId;
        res.status(201).send({
          msg: "payment done",
          status: "success",
          data: response.data,
          phonePeTransactionId: phonePeTransactionId,
        });
        console.log("Payment API Response:", response.data);
      })
      .catch(function (error) {
        console.error("Payment API Error:", error.message);
        res.status(500).json({
          msg: "Payment Failed",
          status: "error",
          error: error.message,
        });
      });
  } catch (e) {
    console.error("Internal Server Error:", e.message);
    res.status(500).json({
      msg: "Internal Server Error",
      status: "error",
      error: e.message,
    });
  }
};

exports.check = async (req, res) => {
  console.log("Checking===========");
  try {
    const merchantTransactionId = req.params.txnId;
    const merchantUserId = "WEPEDIATRICSONLINE"; // Update with your merchant ID
    const key = "78b8b52d-8bcc-4422-9f55-ac3460826c8b"; // Update with your API key

    const keyIndex = 1;
    const string =
      `/pg/v1/status/${merchantUserId}/${merchantTransactionId}` + key;
    const sha256 = CryptoJS.SHA256(string).toString();
    const checksum = sha256 + "###" + keyIndex;

    const URL = `https://api.phonepe.com/apis/hermes/pg/v1/status/${merchantUserId}/${merchantTransactionId}`;

    const options = {
      method: "GET",
      url: URL,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
        "X-MERCHANT-ID": merchantUserId,
      },
    };

    console.log("Status API Request Options:", options);

    try {
      const response = await axios.request(options);

      if (response.data.data.responseCode === "SUCCESS") {
        // Create a new order instance

        // Redirect to the success URL
        const url = "https://www.wepediatrics.com";
        return res.redirect(url);
      } else {
        // Redirect to the failure URL
        const url = `https://www.mahadevflutes.com`;
        return res.redirect(url);
      }
    } catch (error) {
      console.error("Status API Error:", error.message);
      console.error("Status API Error Response:", error.response.data);
      res.status(500).json({
        msg: "Error checking payment status",
        status: "error",
        error: error.message,
      });
    }
  } catch (error) {
    console.error("Internal Server Error:", error.message);
    res.status(500).json({
      msg: "Internal Server Error",
      status: "error",
      error: error.message,
    });
  }
};

exports.pay = async (req, res) => {
  // return res.json({
  //   message: "api run",
  //   url: process.env.URL,
  // });

  try {
    const apiEndpoint = "/pg/v1/pay";
    const payAPIRequest = {
      merchantId: "WEPEDIATRICSONLINE",
      merchantTransactionId: "6686a81ebbc50b003e896cbe",
      merchantUserId: "user_" + "6686a81ebbc50b003e896cbe",
      amount: 20 * 100,
      redirectUrl:
        "https://2fd6-103-165-28-23.ngrok-free.app" + "/phonepe/redirect",
      redirectMode: "POST",
      callbackUrl: process.env.URL + "/phonepe/callback",
      mobileNumber: "9999999999",
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };
    const encodedRequest = encodeBase64(JSON.stringify(payAPIRequest));
    const xVerify = generateXVerify(apiEndpoint, encodedRequest);
    let data = JSON.stringify({
      request: encodedRequest,
    });

    console.log("XVerify ", xVerify);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.phonepe.com/apis/hermes/pg/v1/pay",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "X-VERIFY": xVerify,
      },
      data: data,
    };

    const response = await axios.request(config);
    return response.json({
      url: response.data.data.instrumentResponse.redirectInfo.url,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      msg: "Payment Failed",
      status: "error",
      error: error.message,
    });
  }
};
