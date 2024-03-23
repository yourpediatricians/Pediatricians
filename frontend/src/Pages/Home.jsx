import Navbar from "../Components/Navbar"
import Slideshow from "../Components/Slideshow"
import PropertyCard from "../Components/PropertyCard"
import rashes from "../assets/Rashes.png"
import bees from "../assets/bees.png"
import sleep from "../assets/Sleep.png"
import stomach from "../assets/Stomach.png"
import ear from "../assets/Ear.png"
import eye from "../assets/Eye.png"
import cuts from "../assets/Cuts.png"
import allergies from "../assets/Allergies.png"
import cold from "../assets/Cold.png"


function App() {
  return <>
    {/* <div className="underline">App</div> */}
    
    <Slideshow/>
        <div className="flex flex-col justify-center">
              <h2 className="text-white text-4xl font-bold mb-4 p-10 bg-blue-500">How we Work</h2>
              <p className='text-3xl font-bold ml-4'>Whenever your child is not feeling well, you can chat with your team of pediatricians</p>
              <ul className='list'>
                <li className='text-2xl text-gray-600 p-4'>Answer a few quick questions about your child's symptoms</li>
                <li className='text-2xl text-gray-600 p-4'>Send your child's relevant vitals, ear exam, or photos/video securely via our website</li>
                <li className='text-2xl text-gray-600 p-4'>Within minutes, you'll speak with a pediatrician! You'll get a diagnosis, prescription and doctor's note - even if it is the middle of the night.</li>
              </ul>
        </div>
        <h2 className="text-white text-4xl font-bold mb-4 p-10 bg-blue-500">What we can treat</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            <PropertyCard imageSrc={rashes} altText="Rashes" />
            <PropertyCard imageSrc={sleep} altText="Sleep Issues" />
            <PropertyCard imageSrc={bees} altText="Stings and Bites" />
            <PropertyCard imageSrc={stomach} altText="Stomach Upset" />
            <PropertyCard imageSrc={ear} altText="Ear Infections" />
            <PropertyCard imageSrc={eye} altText="Eye Irritation" />
            <PropertyCard imageSrc={cuts} altText="Cuts and Scrapes" />
            <PropertyCard imageSrc={allergies} altText="Allergies" />
            <PropertyCard imageSrc={cold} altText="Cold and Fever" />
            
            
        </div>
    </>
}

export default App