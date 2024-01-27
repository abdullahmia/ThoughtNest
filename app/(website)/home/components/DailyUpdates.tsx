import Heading from '@/app/components/ui/Heading/Heading'

export default function DailyUpdates() {
  return (
    <>
      <Heading hightlightedText="Today's" text="Update" />

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="flex h-32 w-full flex-col items-center justify-center rounded-lg bg-lightGray">
          <h2 className="text-3xl font-semibold text-fill-primary">24</h2>
          <p className="text-secondary">New Posts</p>
        </div>
        <div className="flex h-32 w-full flex-col items-center justify-center rounded-lg bg-lightGray">
          <h2 className="text-3xl font-semibold text-fill-primary">155</h2>
          <p className="text-secondary">Total Visitors</p>
        </div>
        <div className="flex h-32 w-full flex-col items-center justify-center rounded-lg bg-lightGray">
          <h2 className="text-3xl font-semibold text-fill-primary">29</h2>
          <p className="text-secondary">Subscribers</p>
        </div>
        <div className="flex h-32 w-full flex-col items-center justify-center rounded-lg bg-lightGray">
          <h2 className="text-3xl font-semibold text-fill-primary">130</h2>
          <p className="text-secondary">Blog read</p>
        </div>
      </div>
    </>
  )
}
