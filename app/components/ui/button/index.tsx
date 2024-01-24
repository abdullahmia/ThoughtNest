// interface ButtonProps {
//   children: React.ReactNode
//   varriant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'text'
//   size?: 'sm' | 'md' | 'lg'
//   onClick?: () => void
//   disabled?: boolean
//   type?: 'button' | 'submit' | 'reset'
//   className?: string
//   rounded?: 'sm' | 'md' | 'lg' | 'full'
// }

import Link from 'next/link'

export interface ButtonProps {
  loading?: boolean
  disabled?: boolean
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'danger'
  type?: 'button' | 'submit' | 'reset' | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  to?: string
  onClick?: any
  linkButton?: boolean
  fullWidth?: boolean
  weight?: 'normal' | 'bold' | 'light'
  customClass?: string
  flex?: boolean
}

export default function Button(props: ButtonProps) {
  let classess = `
    rounded
    transition
    duration-200
    ease-in-out
    flex items-center gap-2
    cursor-pointer
    ${
      props.variant === 'secondary'
        ? 'shadow bg-white'
        : props.variant === 'primary'
          ? 'bg-fill-primary text-white'
          : props.variant === 'outline'
            ? 'border border-primary hover:bg-primary hover:text-white'
            : props.variant === 'danger'
              ? 'border border-dangerColor text-dangerColor'
              : props.variant === 'text' && 'hover:bg-lightGray'
    }
    ${
      props.weight === 'bold'
        ? 'font-bold'
        : props.weight === 'normal'
          ? 'font-light'
          : props.weight === 'light'
            ? 'font-extraLight'
            : 'font-normal'
    }
    ${
      props.size === 'xs'
        ? 'px-2 py-1 text-xs'
        : props.size === 'sm'
          ? 'px-3 py-2 text-sm'
          : props.size === 'md'
            ? 'px-4 py-2 text-base'
            : props.size === 'lg'
              ? 'px-7 py-3 text-lg'
              : props.size === 'xl'
                ? 'px-10 py-4 text-xl'
                : 'px-8 py-3.5 text-md'
    }
    ${props.customClass}
    ${props.fullWidth ? 'w-full flex items-center justify-center' : ''}
  `
  return !props.linkButton ? (
    <button
      className={classess}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.loading && <>Loading</>}
      {props.children}
    </button>
  ) : (
    <Link href={props.to ? (props.to as string) : '/'} className={classess}>
      {props.children}
    </Link>
  )
}
