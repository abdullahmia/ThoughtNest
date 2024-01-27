import Button from '@/app/components/ui/button'
import Link from 'next/link'
import Footer from './(website)/components/footer'
import Header from './(website)/components/header'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <div className="mx-auto flex h-full max-w-xl flex-col items-center justify-center py-16 text-center">
        <p className="text-[100px] font-semibold text-fill-primary">404</p>
        <h1 className="mt-2 text-2xl font-bold">Page not found</h1>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link href={'/'} className="mt-8">
          <Button variant="primary">Back to home</Button>
        </Link>
      </div>
      <Footer />
    </div>
  )
}
