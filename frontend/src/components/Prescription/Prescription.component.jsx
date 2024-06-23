import jsPDF from "jspdf"
import { Button } from "react-bootstrap"

import logo from '../../assets/we_logo.png'

import calibri from "../../assets/fonts/calibri"
import calibri_bold from '../../assets/fonts/calibri_bold'
import calibri_italic from '../../assets/fonts/calibri_italic'

export default function Prescription() {
  const createPrescription = () => {
    const doc = new jsPDF()

    doc.addFileToVFS("calibri.ttf", calibri)
    doc.addFileToVFS("calibri_bold.ttf", calibri_bold)
    doc.addFileToVFS("calibri_italic.ttf", calibri_italic)
    doc.addFont("calibri.ttf", "calibri", "normal")
    doc.addFont("calibri_bold.ttf", "calibri", "bold")
    doc.addFont("calibri_italic.ttf", "calibri", "italic")

    doc.setFont('calibri')

    doc.addImage(logo, 'PNG', 15, 10, 68, 25, '', 'SLOW')

    doc.setFont(undefined, 'bold')
    doc.setFontSize(16)
    doc.text("Prescription", 90, 40)

    doc.setFontSize(10)
    doc.text("Patient Name", 10, 50)
    doc.text(":", 40, 50)
    doc.text("Age/Sex", 10, 55)
    doc.text(":", 40, 55)
    doc.text("Doctor", 10, 60)
    doc.text(":", 40, 60)

    doc.setFont(undefined, 'normal')
    doc.text('Mr. Lakshay', 45, 50)
    doc.text('20/M', 45, 55)
    doc.text('Dr. Nikhil', 45, 60)

    doc.setFont(undefined, 'bold')
    doc.text("Prescription ID", 120, 50)
    doc.text(":", 150, 50)
    doc.text("Date", 120, 55)
    doc.text(":", 150, 55)

    doc.setFont(undefined, 'normal')
    doc.text('A12345', 155, 50)
    doc.text('24/04/2024', 155, 55)

    doc.line(10, 62, 200, 62)

    doc.setFontSize(12)
    doc.text('Medicines', 10, 70)

    doc.line(10, 72, 200, 72)

    doc.setFont(undefined, 'bold')
    doc.setFontSize(10)
    doc.text('Dr. Rahul Sehrawat', 200, 250, { align: 'right' })

    doc.setFont(undefined, 'normal')
    doc.setFontSize(10)
    doc.text('MBBS', 200, 255, { align: 'right' })
    doc.text('Chief Medical Officer, Pediatrician', 200, 260, { align: 'right' })

    doc.setFillColor(225);
    doc.rect(0, 280, 210, 14, 'F');

    doc.setFont(undefined, 'normal')
    doc.text('Disclaimer: This prescription is based on the information provided by you in an online consultation and not on any physical verification. Visit a doctor in case of emergency. This prescription is valid in India only.',
      105, 286, { align: 'center', maxWidth: 200 }
    )





    doc.save(`test`)
  }

  return (
    <div>
      <Button onClick={createPrescription}>Download Prescription</Button>
    </div>
  )
}
