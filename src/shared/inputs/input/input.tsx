//adicionamos uma biblioteca que tem componentes pré definidos
import { Input as InputAntD, InputProps as InputPropsAntD } from 'antd'
//puxando estilos personalizados
import { BoxInput, TitleInput } from './input.styles'

//criação de tipagem e extender componentes pre-definidos do Antd
interface InputProps extends InputPropsAntD {
  title?: string
}

const Input = ({ title, ...props }: InputProps) => {
  return (
    <BoxInput>
      <TitleInput>{title}</TitleInput>
      <InputAntD {...props}></InputAntD>
    </BoxInput>
  )
}

export default Input