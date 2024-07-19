import { styled } from "styled-components";
import { FaSignInAlt, FaUserAlt } from "react-icons/fa";

const CATEGORY = [
  {
    id: null,
    name: "전체",
  },
  {
    id: 1,
    name: "동화",
  },
  {
    id: 2,
    name: "소설",
  },
  {
    id: 3,
    name: "시/에세이",
  },
  {
    id: 4,
    name: "예술/대중문화",
  },
  {
    id: 5,
    name: "자기계발",
  },
];

function Header() {
  return (
    <HeaderStyle>
      <h1 className="logo">
        <img src="/images/logo.png" alt="bookie" />
      </h1>
      <nav className="category">
        <ul>
          {CATEGORY.map((category) => (
            <li key={category.id}>
              <a
                href={
                  category.id === null
                    ? `/book`
                    : `/book?category=${category.id}`
                }
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="auth">
        <ul>
          <li>
            <a href="/login">
              <FaSignInAlt />
              로그인
            </a>
          </li>
          <li>
            <a href="/signup">
              <FaUserAlt />
              회원가입
            </a>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.background};

  .logo {
    img {
      width: 200px;
    }
  }

  .category {
    ul {
      display: flex;
      gap: 40px;
      li {
        a {
          font-size: 1.5rem;
          font-weight: 600;
          text-decoration: none;
          color: ${({ theme }) => theme.color.text};

          &:hover {
            color: ${({ theme }) => theme.color.primary};
          }
        }
      }
    }
  }

  .auth {
    ul {
      display: flex;
      gap: 20px;
      li {
        a {
          font-size: 1.2rem;
          font-weight: 600;
          text-decoration: none;

          display: flex;
          align-items: center;
          gap: 8px;

          svg {
            font-size: 1rem;
          }

          color: ${({ theme }) => theme.color.text};

          &:hover {
            color: ${({ theme }) => theme.color.primary};
          }
        }
      }
    }
  }
`;

export default Header;
