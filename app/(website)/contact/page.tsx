import Heading from '@/app/components/ui/Heading/Heading'
import ContactForm from './components/ContactForm'

export default function Contact() {
  return (
    <div className="container py-16">
      <div className="text-center">
        <Heading hightlightedText="Contact" text="Us" />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-2">
        <div className="w-full">
          <ContactForm />
        </div>
        <div className="w-full space-y-5">
          <div>
            <p className="text-secondary">
              Dynamically underwhelm integrated outsourcing via timely models.
              Rapidiously reconceptualize visionary imperatives without
            </p>
          </div>
          <div className="space-y-2 text-secondary">
            <p>blog.notebook@gmail.com</p>
            <p>+886554 654654</p>
            <p>Mon - Fri 9:00 - 18:00</p>
            <p>9567 Turner Trace Apt. BC C3G8A4</p>
          </div>
        </div>
      </div>
    </div>
  )
}
