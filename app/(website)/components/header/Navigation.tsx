import Button from '@/app/components/ui/button'
import Logo from '@/app/components/ui/Logo'
import Link from 'next/link'
import { BiMenu } from 'react-icons/bi'

interface NavigationProps {
  toggleDrawer: () => void
}

export default function Navigation({ toggleDrawer }: NavigationProps) {
  return (
    <header className="bg-fill-secondary px-4 py-4 lg:px-0">
      <div className="container flex items-center justify-between">
        <div className="hidden space-x-7 lg:block">
          <Link href={'/home'} className="transition hover:text-fill-primary">
            Home
          </Link>
          <Link
            href={'/categories'}
            className="transition hover:text-fill-primary"
          >
            Categories
          </Link>
          <Link
            href={'/become-writer'}
            className="transition hover:text-fill-primary"
          >
            Become a writer?
          </Link>
          <Link
            href={'/contact'}
            className="transition hover:text-fill-primary"
          >
            Contact
          </Link>
        </div>

        <Logo />

        <button onClick={toggleDrawer} className="block lg:hidden">
          <BiMenu size={20} />
        </button>

        <div className="hidden lg:block">
          <div className="flex items-center gap-3">
            <Button variant="primary" size="md">
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
