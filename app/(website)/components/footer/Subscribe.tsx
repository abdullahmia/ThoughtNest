import Button from '@/app/components/ui/Button/index'
import FormElements from '@/app/components/ui/FormElement'

export default function Subsribe() {
  return (
    <form>
      <h3 className="mb-3 text-xl font-bold">Subscribe for newsletter</h3>
      <div className="space-y-3">
        <FormElements.Input placeholder="Enter your email" />
        <Button variant="primary" fullWidth size="md">
          Subscribe
        </Button>
      </div>
    </form>
  )
}
