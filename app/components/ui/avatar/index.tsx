import Image, { StaticImageData } from 'next/image'

interface AvatarProps {
  size: 'small' | 'medium' | 'large'
  image?: StaticImageData | string | null | undefined
  name: string
  rounded?: boolean
}

const getInitials = (name: string): string => {
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('')
  return initials
}

export const Avatar = ({ size, image, name, rounded = true }: AvatarProps) => {
  const sizeClass = {
    small: 'w-6 h-6',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
  }[size]

  const roundedClass = rounded ? 'rounded-full' : ''

  return (
    <div
      className={`flex items-center justify-center bg-[#222B40] dark:bg-[#171718] ${sizeClass} ${roundedClass}`}
    >
      {image ? (
        <Image
          src={image}
          alt={name}
          className={`h-full w-full object-cover ring-2 ring-opacity-10 ${
            rounded ? 'rounded-full' : 'rounded-none'
          }`}
          height={64}
          width={64}
        />
      ) : (
        <span
          className={`
          text-white
          ${
            size === 'small'
              ? 'text-[10px]'
              : size === 'medium'
                ? 'text-sm'
                : 'text-lg'
          }
        
        `}
        >
          {getInitials(name)}
        </span>
      )}
    </div>
  )
}
