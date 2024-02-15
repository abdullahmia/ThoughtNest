import Heading from '@/app/components/ui/Heading/Heading'
import Button from '@/app/components/ui/button'

export default function BecomeWriter() {
  return (
    <div className="">
      <div className="w-full bg-lightGray">
        <div className="m-auto w-1/3 space-y-4 py-7 text-center lg:py-36">
          <Heading hightlightedText={`Writer On`} text="Notebook" />
          <p className="text-md font-semibold">
            Write on notebook is very simple
          </p>
          <p className="text-se text-sm">
            Go to your mail and start typing your article with title &
            categories, attached your image/video file (if have).
          </p>
          <div className="flex items-center justify-center">
            <Button
              variant="primary"
              size="sm"
              linkButton
              to="/become-writer/onboarding"
            >
              Start Writing
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-10 lg:py-28">
        <div className="text-center">
          <Heading
            hightlightedText={`How can you earn`}
            text="By writing on medium"
          />
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-36">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold capitalize">by ad revinue</h2>
            <p className="text-sm text-secondary">
              Dynamically underwhelm integrated outsourcing via timely models.
              Rapidiously reconceptualize visionary imperatives without 24/365
              catalysts for change. Completely streamline functionalized models
              and out-of-the-box functionalities.{' '}
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold capitalize">
              by affiliate programme
            </h2>
            <p className="text-sm text-secondary">
              Dynamically underwhelm integrated outsourcing via timely models.
              Rapidiously reconceptualize visionary imperatives without 24/365
              catalysts for change. Completely streamline functionalized models
              and out-of-the-box functionalities. Authoritatively target
              proactive vortals vis-a-vis exceptional results. Compellingly
              brand
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
