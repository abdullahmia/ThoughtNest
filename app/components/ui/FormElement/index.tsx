import { FormError, FromErrorProps } from './Error'
import { Input, InputProps } from './Input'
import { Label, LabelProps } from './Label'

export const FormElements = {
  Label: (props: LabelProps) => <Label {...props} />,
  Input: (props: InputProps) => <Input {...props} />,
  FromError: (props: FromErrorProps) => <FormError {...props} />,
}

export default FormElements
