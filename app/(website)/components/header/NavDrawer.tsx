import Button from '@/app/components/ui/button'
import Link from 'next/link'
import { BiX } from 'react-icons/bi'

interface NavDrawerProps {
  isDrowerOpen: boolean
  toggoleDrower: () => void
}

export default function NavDrawer({
  isDrowerOpen,
  toggoleDrower,
}: NavDrawerProps) {
  return (
    <>
      {isDrowerOpen && (
        <div
          onClick={toggoleDrower}
          className=" absolute left-0 top-0 z-[100] block h-screen w-full bg-white opacity-50 transition duration-150 lg:hidden"
        ></div>
      )}

      <div
        className="absolute top-0 z-[150] block h-screen w-[60%] bg-fill-secondary transition duration-150 lg:hidden"
        style={{
          transform: `translateX(${isDrowerOpen ? '0' : '-100%'})`,
        }}
      >
        <button onClick={toggoleDrower} className="menu mt-5 px-5">
          <BiX size={20} />
        </button>

        {/* Drower Menu will be here... */}
        <div className="">
          {/* Menues */}
          <div className="px-5 py-4">
            <ul
              className="menu flex flex-col gap-4 text-sm"
              onClick={toggoleDrower}
            >
              <Link href="/home">Home</Link>
              <Link href="/categories">Categories</Link>
              <Link href="/become-writer">Become a writer?</Link>
              <Link href="/contact">Contact</Link>
            </ul>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="text" size="md">
              Login
            </Button>
            <Button variant="primary" size="md">
              Signup
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
