import Logo from '@/app/components/ui/Logo'
import Link from 'next/link'
import Subsribe from './Subscribe'

export default function Footer() {
  return (
    <footer className="bg-lightGray px-4 pt-4 lg:px-0">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 pt-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="text-secondary">
              Did you come here for something in particular or just general
              Riker
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-bold">About</h3>
            <ul className="flex flex-col gap-3 text-secondary">
              <Link href="/home">Home</Link>
              <Link href="/categories">Categories</Link>
              <Link href="/become-writer">Become a writer?</Link>
              <Link href="/contact">Contact</Link>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-bold">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-secondary">
              <Link href="/home">Faqs</Link>
              <Link href="/categories">Terms & Conditions</Link>
              <Link href="/become-writer">Support Center</Link>
              <Link href="/contact">Carrer</Link>
            </ul>
          </div>
          <div>
            <Subsribe />
          </div>
        </div>
        <div className="mt-8 border-t py-5 text-center text-primary">
          <p className="">Designed & Developed By Abdullah Mia</p>
        </div>
      </div>
    </footer>
  )
}
