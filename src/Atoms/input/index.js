import { StyleInput } from './input.style'

const Input = (props) => {
  const {label, value, type = "text", name, fullWidth, ref, onchange} = props
  return (
    <StyleInput {...props}>
        <label>{label}</label>
        <input name={name} type={type} value={value} ref={ref} 
        onChange={e => onchange(e.target)} />
    </StyleInput>
  )
}

export default Input