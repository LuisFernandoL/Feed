import { StyledHeader } from './style'
import { Button } from '../../Styles/buttons'
import logo from '../../assets/logo.svg'
import { Container } from '../../Styles/global'

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <img src={logo}/>
        <Button variant='primary' width='112px'>Acessar</Button>
      </Container>
    </StyledHeader>
  )
} 