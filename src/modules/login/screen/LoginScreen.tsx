import Input from '../../../shared/inputs/input/input'
import {BackgroundImage, ConteinerLogin, LimitedConteiner, LogoIMG} from '../styles/loginScreenStyles'

const LoginScreen = ()=>{
  return(
    <div>
      <BackgroundImage src='./barraca.png' />

      <ConteinerLogin>

        <LimitedConteiner>

        <LogoIMG src='./logo.png'></LogoIMG>
        <Input title='Usuário'></Input>
        <Input title='Senha'></Input>

        </LimitedConteiner>

      </ConteinerLogin>
      
    </div>
  )
}
export default LoginScreen