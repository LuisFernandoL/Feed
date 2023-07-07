import { Container } from "./styled";

interface FooterProps {
  variant?: "fixed"|"static"
} 

export const Footer = ({variant}: FooterProps) => (
  <Container variant={variant}>
    <footer>
      <p>Todos os direitos reservados - Kenzie Academy Brasil</p>
    </footer>
  </Container>
)