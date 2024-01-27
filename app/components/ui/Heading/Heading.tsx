interface HeadingProps {
  hightlightedText?: string
  text?: string
}

export default function Heading({ hightlightedText, text }: HeadingProps) {
  return (
    <div>
      <h2 className="text-md">
        <span className="bg-fill-primary px-1 text-2xl text-white">
          {hightlightedText}
        </span>
        {text && (
          <span className="ms-1 font-semibold text-secondary">{text}</span>
        )}
      </h2>
    </div>
  )
}
