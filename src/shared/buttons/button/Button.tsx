import { ButtonProps } from "antd"
import { ButtonAntd } from "./button.styles"

interface ButtonCurrentProps extends ButtonProps {
  margin?: string
}

 const Button = ({margin,...props}: ButtonCurrentProps)=>{
  return <ButtonAntd style={{margin:margin}}{...props}></ButtonAntd>
}

export default Button