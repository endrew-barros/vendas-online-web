import Button from '../../../shared/buttons/button/Button'
import Input from '../../../shared/inputs/input/input'
import {BackgroundImage, ConteinerLogin, LimitedConteiner, LogoIMG, TitleLogin} from '../styles/loginScreenStyles'

const LoginScreen = ()=>{
  return(
    <div>
      <BackgroundImage src='./barraca.png' />

      <ConteinerLogin>

        <LimitedConteiner>

        <LogoIMG src='./logo.png'></LogoIMG>
        <TitleLogin level={2} type='secondary'>LOGIN</TitleLogin>
        <Input title='Usuário'></Input>
        <Input title='Senha'></Input>
        <Button type='primary' margin='20px 0px 16px 0px'>ENTRAR</Button>

        </LimitedConteiner>

      </ConteinerLogin>
      
    </div>
  )
}
export default LoginScreen