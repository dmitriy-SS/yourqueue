import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  height: 100%;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color};
  }
  a:hover {
    color: ${({ theme }) => theme.primary};
    border-bottom: 1px solid ${({ theme }) => theme.primary};
  }
  a + .active {
    color: ${({ theme }) => theme.primary};
  }
`;