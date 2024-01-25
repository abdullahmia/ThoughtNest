import Link from 'next/link'
import Button from './components/ui/Button'

export default function NotFound() {
  return (
    <>
      <div className="mx-auto flex h-full max-w-xl flex-col items-center justify-center py-16 text-center">
        <p className="text-sm font-semibold text-primary">404</p>
        <h1 className="mt-2 text-2xl font-bold">Page not found</h1>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link href={'/'} className="mt-8">
          <Button variant="primary">Back to home</Button>
        </Link>
      </div>
    </>
  )
}
