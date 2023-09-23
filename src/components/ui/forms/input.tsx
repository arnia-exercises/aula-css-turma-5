import { DetailedHTMLProps, InputHTMLAttributes, ReactElement } from "react";
import Style from './input.style'

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string
  id: string
  hasError?: boolean
  icon?: ReactElement
  onIcon?: () => void
}

export default function Input ({ label, id, hasError, icon, onIcon, ...props }: Props) {

  const classis = [
    props.value ? 'active' : '',
    (hasError && props.value) ? 'error' : ''
  ]

  return (
    <Style.Div className={classis.join(' ')}>
      <Style.Input {...props} id={id} placeholder="Insira seu e-mail" />
      <Style.Label htmlFor={id}>{label}</Style.Label>
      {icon && (
        <Style.Icon onClick={onIcon}>{icon}</Style.Icon>
      )}
    </Style.Div>
  )
}
