import { FormError, FromErrorProps } from './Error'
import { Input, InputProps } from './Input'
import { Label, LabelProps } from './Label'
import { Textarea, TextareaProps } from './Textarea'

export const FormElements = {
  Label: (props: LabelProps) => <Label {...props} />,
  Input: (props: InputProps) => <Input {...props} />,
  Textarea: (props: TextareaProps) => <Textarea {...props} />,
  FromError: (props: FromErrorProps) => <FormError {...props} />,
}

export default FormElements
