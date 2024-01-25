import Heading from '@/app/components/ui/Heading/Heading'
import Image from 'next/image'

export default function Popular() {
  return (
    <>
      <Heading hightlightedText="Popular" text="Posts" />

      <div className="mt-8 space-y-4">
        {/* Single Posts */}
        <div className="flex items-center gap-8 rounded-md px-5 py-0">
          <div className="w-[200px] bg-fill-primary">
            <Image
              src={
                'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
              }
              height={130}
              width={140}
              className="rounded-md"
              alt="post"
            />
          </div>
          <div className="space-y-3">
            <span className="bg-fill-secondary px-2 py-1 text-fill-primary">
              Life style
            </span>
            <h2 className="">Set video playback speed with javascript</h2>
          </div>
        </div>
        <div className="flex items-center gap-8 rounded-md px-5 py-0">
          <div className="w-[200px] bg-fill-primary">
            <Image
              src={
                'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
              }
              height={130}
              width={140}
              className="rounded-md"
              alt="post"
            />
          </div>
          <div className="space-y-3">
            <span className="bg-fill-secondary px-2 py-1 text-fill-primary">
              Life style
            </span>
            <h2 className="">Set video playback speed with javascript</h2>
          </div>
        </div>
        <div className="flex items-center gap-8 rounded-md px-5 py-0">
          <div className="w-[200px] bg-fill-primary">
            <Image
              src={
                'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
              }
              height={130}
              width={140}
              className="rounded-md"
              alt="post"
            />
          </div>
          <div className="space-y-3">
            <span className="bg-fill-secondary px-2 py-1 text-fill-primary">
              Life style
            </span>
            <h2 className="">Set video playback speed with javascript</h2>
          </div>
        </div>
        <div className="flex items-center gap-8 rounded-md px-5 py-0">
          <div className="w-[200px] bg-fill-primary">
            <Image
              src={
                'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
              }
              height={130}
              width={140}
              className="rounded-md"
              alt="post"
            />
          </div>
          <div className="space-y-3">
            <span className="bg-fill-secondary px-2 py-1 text-fill-primary">
              Life style
            </span>
            <h2 className="">Set video playback speed with javascript</h2>
          </div>
        </div>
      </div>
    </>
  )
}
