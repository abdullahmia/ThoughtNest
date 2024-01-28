'use client'

export interface TextareaProps {
  placeholder?: string
  value?: string
  onChange?: (e: any) => void
  width?: 'full' | 'half' | 'third' | 'quarter' | 'auto'
  varriant?: 'no-styled'
  fontSizeVariant?: 'small' | 'medium' | 'large'
  row?: number
}

export const Textarea = ({
  placeholder,
  value,
  onChange,
  varriant,
  width = 'full',
  fontSizeVariant,
  row = 5,
}: TextareaProps) => {
  const styles = `
          ${
            varriant === 'no-styled'
              ? `text-2xl ${
                  fontSizeVariant === 'small'
                    ? 'text-sm'
                    : fontSizeVariant === 'medium'
                      ? 'text-md'
                      : fontSizeVariant === 'large'
                        ? 'text-lg'
                        : ''
                }`
              : 'rounded border-2 border-[#94D7D3] px-3 py-2'
          }
          ${
            width === 'full'
              ? 'w-full'
              : width === 'half'
                ? 'w-1/2'
                : width === 'third'
                  ? 'w-1/3'
                  : width === 'quarter'
                    ? 'w-1/4'
                    : width === 'auto'
                      ? 'w-auto'
                      : ''
          }
        py-3 focus:outline-none
        `
  return (
    <div>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder || ''}
        className={`
          ${
            varriant === 'no-styled'
              ? `text-2xl ${
                  fontSizeVariant === 'small'
                    ? 'text-sm'
                    : fontSizeVariant === 'medium'
                      ? 'text-md'
                      : fontSizeVariant === 'large'
                        ? 'text-lg'
                        : ''
                }`
              : 'rounded border-2 border-[#94D7D3] px-3 py-2'
          }
          ${
            width === 'full'
              ? 'w-full'
              : width === 'half'
                ? 'w-1/2'
                : width === 'third'
                  ? 'w-1/3'
                  : width === 'quarter'
                    ? 'w-1/4'
                    : width === 'auto'
                      ? 'w-auto'
                      : ''
          }
        py-3 focus:outline-none
        `}
        rows={row}
      />
    </div>
  )
}
