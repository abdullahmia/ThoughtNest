import Button from '@/app/components/ui/button'
import Link from 'next/link'

export default function Header() {
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

        <div>
          <h2 className="text-md">
            <span className="bg-fill-primary px-1 text-2xl text-white">
              THOUGHT
            </span>
            NEST
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="md">
            Login
          </Button>
          <Button variant="primary" size="md">
            Signup
          </Button>
        </div>
      </div>
    </header>
  )
}
