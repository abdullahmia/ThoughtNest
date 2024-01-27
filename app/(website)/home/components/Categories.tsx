import Heading from '@/app/components/ui/Heading/Heading'
import Link from 'next/link'

export default function Categories() {
  return (
    <>
      <Heading hightlightedText="Categories" />

      <div className="mt-7">
        <Link
          href="/"
          className="flex items-center justify-between border-b border-dotted py-2 text-[1C1C1C]"
        >
          <span>Technology</span>
          <span>(08)</span>
        </Link>
        <Link
          href="/"
          className="flex items-center justify-between border-b border-dotted py-2 text-[1C1C1C]"
        >
          <span>Computers</span>
          <span>(08)</span>
        </Link>
        <Link
          href="/"
          className="flex items-center justify-between border-b border-dotted py-2 text-[1C1C1C]"
        >
          <span>Sports</span>
          <span>(08)</span>
        </Link>
        <Link
          href="/"
          className="flex items-center justify-between border-b border-dotted py-2 text-[1C1C1C]"
        >
          <span>Entertainments</span>
          <span>(08)</span>
        </Link>
        <Link
          href="/"
          className="flex items-center justify-between border-b border-dotted py-2 text-[1C1C1C]"
        >
          <span>Buisness</span>
          <span>(08)</span>
        </Link>
        <Link
          href="/"
          className="flex items-center justify-between border-b border-dotted py-2 text-[1C1C1C]"
        >
          <span>Fitness</span>
          <span>(08)</span>
        </Link>
        <Link
          href="/"
          className="flex items-center justify-between border-b border-dotted py-2 text-[1C1C1C]"
        >
          <span>Programming</span>
          <span>(08)</span>
        </Link>
      </div>
    </>
  )
}
