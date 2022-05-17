import styled from "styled-components";

const Footer = () => {
  return <FooterContainer>Footer</FooterContainer>;
};

const FooterContainer = styled.footer`
  padding: 0.75em 2em;
  border: 1px solid #e8e8e8;
  box-shadow: 0px 6px 10px -11px #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 750px) {
    padding: 0.75em 1em;
  }
  display: flex;
  justify-content: center;
  width: 100%;
  box-shadow: -1px -5px 16px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px -5px 16px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px -5px 16px -10px rgba(0, 0, 0, 0.75);
  color: gray;
`;

export default Footer;
