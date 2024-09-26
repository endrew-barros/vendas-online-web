//adicionamos uma biblioteca que tem componentes pré definidos
import { Input as InputAntD, InputProps as InputPropsAntD } from 'antd'
//puxando estilos personalizados
import { BoxInput, TitleInput } from './input.styles'

//criação de tipagem e extender componentes pre-definidos do Antd
interface InputProps extends InputPropsAntD {
  title?: string
  margin?: string
}

const Input = ({ title, margin, ...props }: InputProps) => {
  return (
    <BoxInput style={{margin}}>
      <TitleInput>{title}</TitleInput>
      <InputAntD {...props}></InputAntD>
    </BoxInput>
  )
}

export default Input