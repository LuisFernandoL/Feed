import { StyledHeader } from './style'
import { Button } from '../../Styles/buttons'
import logo from '../../assets/logo.svg'

export const Header = () => {
  return (
    <StyledHeader>
      <div>
        <img src={logo}/>
        <Button variant='secondary' width='112px'>Acessar</Button>
      </div>
    </StyledHeader>
  )
} 