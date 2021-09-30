import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.gradientBlue};
  backdrop-filter: blur(3px);
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
  @media (max-width:500px){
      background: ${({ theme }) => theme.gradientGreen2};
      border: 1px solid ${({ theme}) => theme.colors.primary};
    }
`;

export default function Footer(props) {
  return (
    <FooterWrapper {...props}>
      <p>
      Especialmente produzido e desenvolvido pelos/as seguintes estudantes:
      <ul>
        <li>Ian Moreira</li>
        <li>Leonardo Carvalho</li>
        <li>Leonardo Couto</li>
        <li>Luan Chrisler</li>
        <li>Marília Marques</li>
        <li>Naionara Maia</li>
        <li>Vinícius Barros</li>
        <li>Reinaldo de Oliveira</li>
        <li>Rewelton Novaes</li>
      </ul>
      Todos/as integrantes do IX semestre de Direito da UniFtc.
      </p>
    </FooterWrapper>
  );
}