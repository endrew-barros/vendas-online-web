import React, { useState } from 'react'
import Button from '../../../shared/buttons/button/Button'
import Input from '../../../shared/inputs/input/input'
import {BackgroundImage, ConteinerLogin, LimitedConteiner, LogoIMG, TitleLogin} from '../styles/loginScreenStyles'

const LoginScreen = ()=>{
  const [userName, setUserName] = useState('')
  const [passWord,setPassWord] = useState('')

  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>)=>{
    setUserName(event.target.value)
  }
  const handlePassWord = (event: React.ChangeEvent<HTMLInputElement>)=>{
    setPassWord(event.target.value)
  }
  //verificando visualmente as funções acima de guardar os valores
  const alertLongin = ()=>{
    alert(`user name: ${userName} password : ${passWord}`)
  }
  return(
    <div>
      <BackgroundImage src='./barraca.png' />

      <ConteinerLogin>

        <LimitedConteiner>

        <LogoIMG src='./logo.png'></LogoIMG>
        <TitleLogin level={2} type='secondary'>LOGIN</TitleLogin>
        <Input title='Usuário' margin='30px 0px 0px' onChange={handleUserName} value={userName}></Input>
        <Input title='Senha' margin='30px 0px 0px' onChange={handlePassWord} value={passWord}></Input>
        <Button type='primary' margin='20px 0px 16px 0px' onClick={alertLongin}>ENTRAR</Button>

        </LimitedConteiner>

      </ConteinerLogin>
      
    </div>
  )
}
export default LoginScreen