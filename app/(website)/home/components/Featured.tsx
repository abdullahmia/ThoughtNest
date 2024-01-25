import Heading from '@/app/components/ui/Heading/Heading'
import { Avatar } from '@/app/components/ui/avatar'
import Image from 'next/image'
import { IoCalendarClearOutline, IoStopwatchOutline } from 'react-icons/io5'

export default function Featured() {
  return (
    <>
      <Heading hightlightedText="Featured" text="This Month" />
      <div className="mt-8 space-y-4">
        {/* Single Posts */}
        <div className="flex gap-8 rounded-md bg-white p-5">
          <div>
            <Image
              src={
                'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
              }
              height={330}
              width={300}
              className="rounded-md"
              alt="post"
            />
          </div>
          <div className="space-y-3">
            <span className="bg-fill-secondary px-2 py-1 text-fill-primary">
              Life style
            </span>
            <h2 className="text-2xl">
              Set video playback speed with javascript
            </h2>
            <div className="flex items-center gap-3  text-sm text-secondary">
              <div className="flex gap-2">
                <Avatar size="small" name="Abdullah Mia" />
                <span>Abdullah Mia</span>
              </div>
              <div className="flex gap-2 border-l-2 border-r-2 px-5">
                <IoCalendarClearOutline size={18} /> 02 december 2022
              </div>
              <div className="flex gap-2">
                <IoStopwatchOutline size={22} /> 3 min. to read
              </div>
            </div>
            <p className=" text-sm text-secondary">
              Did you come here for something in particular or just general
              Riker-bashing
            </p>
          </div>
        </div>

        <div className="flex gap-8 rounded-md bg-white p-5">
          <div>
            <Image
              src={
                'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
              }
              height={330}
              width={300}
              className="rounded-md"
              alt="post"
            />
          </div>
          <div className="space-y-3">
            <span className="bg-fill-secondary px-2 py-1 text-fill-primary">
              Life style
            </span>
            <h2 className="text-2xl">
              Set video playback speed with javascript
            </h2>
            <div className="flex items-center gap-3  text-sm text-secondary">
              <div className="flex gap-2">
                <Avatar size="small" name="Abdullah Mia" />
                <span>Abdullah Mia</span>
              </div>
              <div className="flex gap-2 border-l-2 border-r-2 px-5">
                <IoCalendarClearOutline size={18} /> 02 december 2022
              </div>
              <div className="flex gap-2">
                <IoStopwatchOutline size={22} /> 3 min. to read
              </div>
            </div>
            <p className=" text-sm text-secondary">
              Did you come here for something in particular or just general
              Riker-bashing
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
