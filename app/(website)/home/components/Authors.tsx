import Heading from '@/app/components/ui/Heading/Heading'
import { Avatar } from '@/app/components/ui/avatar'

export default function Authors() {
  return (
    <>
      <Heading hightlightedText="Top" text="Authors" />

      <div className="mt-8">
        {/* Single Author */}
        <div className="flex items-center gap-4 py-4">
          <div>
            <Avatar name="Abdullah Mia" size="large" />
          </div>
          <div>
            <h2 className="text-lg text-primary">Abdullah Mia</h2>
            <p className="text-sm text-secondary">
              Full Stack Software Developer
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 py-4">
          <div>
            <Avatar name="Abdullah Mia" size="large" />
          </div>
          <div>
            <h2 className="text-lg text-primary">Abdullah Mia</h2>
            <p className="text-sm text-secondary">
              Full Stack Software Developer
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 py-4">
          <div>
            <Avatar name="Abdullah Mia" size="large" />
          </div>
          <div>
            <h2 className="text-lg text-primary">Abdullah Mia</h2>
            <p className="text-sm text-secondary">
              Full Stack Software Developer
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 py-4">
          <div>
            <Avatar name="Abdullah Mia" size="large" />
          </div>
          <div>
            <h2 className="text-lg text-primary">Abdullah Mia</h2>
            <p className="text-sm text-secondary">
              Full Stack Software Developer
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
