import Authors from './components/Authors'
import Categories from './components/Categories'
import DailyUpdates from './components/DailyUpdates'
import Featured from './components/Featured'
import Popular from './components/Popular'
import Recent from './components/Recent'
import SearchWithTags from './components/SearchWithTags'

export default function Home() {
  return (
    <>
      <div className="bg-lightGray py-16">
        <div className="container">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-8">
              <Featured />
            </div>
            <div className="col-span-12 lg:col-span-4">
              <Popular />
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container">
          <div className="grid grid-cols-12 gap-14">
            <div className="col-span-12 lg:col-span-8">
              <Recent />
            </div>
            <div className="col-span-12 lg:col-span-4">
              <Authors />

              <div className="mt-14">
                <Categories />
              </div>

              <div className="mt-14">
                <DailyUpdates />
              </div>

              <div className="mt-14">
                <SearchWithTags />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
