import Heading from '@/app/components/ui/Heading/Heading'
import Link from 'next/link'

export default function SearchWithTags() {
  return (
    <>
      <Heading hightlightedText="Search" text="With Tags" />
      <div className="mt-8">
        <div className="flex flex-wrap gap-2">
          <Link
            href="/"
            className="rounded border px-4 py-2 text-secondary transition hover:border-fill-primary hover:bg-fill-primary hover:text-white"
          >
            Sports
          </Link>
          <Link
            href="/"
            className="rounded border px-4 py-2 text-secondary transition hover:border-fill-primary hover:bg-fill-primary hover:text-white"
          >
            Travel
          </Link>
          <Link
            href="/"
            className="rounded border px-4 py-2 text-secondary transition hover:border-fill-primary hover:bg-fill-primary hover:text-white"
          >
            Technology
          </Link>
          <Link
            href="/"
            className="rounded border px-4 py-2 text-secondary transition hover:border-fill-primary hover:bg-fill-primary hover:text-white"
          >
            Computers
          </Link>
          <Link
            href="/"
            className="rounded border px-4 py-2 text-secondary transition hover:border-fill-primary hover:bg-fill-primary hover:text-white"
          >
            Backend Engineering
          </Link>
          <Link
            href="/"
            className="rounded border px-4 py-2 text-secondary transition hover:border-fill-primary hover:bg-fill-primary hover:text-white"
          >
            DevOps
          </Link>
          <Link
            href="/"
            className="rounded border px-4 py-2 text-secondary transition hover:border-fill-primary hover:bg-fill-primary hover:text-white"
          >
            Clout Computing
          </Link>
          <Link
            href="/"
            className="rounded border px-4 py-2 text-secondary transition hover:border-fill-primary hover:bg-fill-primary hover:text-white"
          >
            JS
          </Link>
        </div>
      </div>
    </>
  )
}
