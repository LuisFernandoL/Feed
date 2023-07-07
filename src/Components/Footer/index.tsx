import { Container } from "./styled";

interface FooterProps {
  variant?: "absolute"| "static"
} 

export const Footer = ({variant}: FooterProps) => (
  <Container variant={variant}>
    <footer>
      <p>Todos os direitos reservados - Kenzie Academy Brasil</p>
    </footer>
  </Container>
)