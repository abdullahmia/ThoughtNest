export interface LabelProps {
  children: React.ReactNode
  withAsterisk?: boolean
}

export const Label = (props: LabelProps) => {
  return (
    <label className={`mb-1 block text-[14px] font-medium text-gray-700`}>
      {props.children}
      {props.withAsterisk && (
        <span className="text-gray-800" title="Required">
          {' '}
          *
        </span>
      )}
    </label>
  )
}
