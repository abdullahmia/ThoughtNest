import FormElements from '@/app/components/ui/FormElement'
import Button from '@/app/components/ui/button'

export default function ContactForm() {
  return (
    <form className="space-y-4">
      <div className="flex gap-5">
        <div className="w-full">
          <FormElements.Label withAsterisk>First Name</FormElements.Label>
          <FormElements.Input type="text" placeholder="First Name" />
        </div>
        <div className="w-full">
          <FormElements.Label withAsterisk>Last Name</FormElements.Label>
          <FormElements.Input type="text" placeholder="Last Name" />
        </div>
      </div>
      <div className="w-full">
        <FormElements.Label withAsterisk>Subject</FormElements.Label>
        <FormElements.Input type="text" placeholder="Subject" />
      </div>
      <div className="w-full">
        <FormElements.Label withAsterisk>Message</FormElements.Label>
        <FormElements.Textarea placeholder="Message" />
      </div>

      <div>
        <Button variant="primary">Send message</Button>
      </div>
    </form>
  )
}
