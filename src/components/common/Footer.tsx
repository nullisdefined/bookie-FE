import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      <h1 className="logo">
        <img src="/images/logo.png" alt="bookie" />
      </h1>
      <div className="copyright">
        <div>Copyright(c), 2024, bookie</div>
        <div>
          <a href="#">이용약관</a>
          <a href="#">개인정보처리방침</a>
        </div>
      </div>
      <hr />
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid ${({ theme }) => theme.color.background};

  .logo {
    flex: 1;
    img {
      width: 140px;
    }
  }

  .copyright {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.color.text};
  }
`;

export default Footer;
