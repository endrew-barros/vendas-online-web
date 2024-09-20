import styled from "styled-components";
import { Typography } from "antd";
const { Title } = Typography;
export const ConteinerLoginScreen = styled.div`
width: 100%;
display: flex;
justify-content: right;
`

export const BackgroundImage = styled.img`
position:absolute;
left: 0;
top: 0;
width: 100%;
height: 100vh;
object-fit: cover;
z-index: -1;
`
export const ConteinerLogin = styled.div`
display: flex;
position:absolute;
right:0px;
align-items: center;
background-color: #d9d9d9;
padding: 20px;
justify-content: center;
width: 100%;
height: 100vh;
max-width: 640px;
z-index: 1;
`
export const LogoIMG = styled.img`
width: 200px;
height:200px`

export const LimitedConteiner = styled.div`
width: 100%;
max-width: 498px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
export const TitleLogin = styled(Title)`
  color: #006397;

`