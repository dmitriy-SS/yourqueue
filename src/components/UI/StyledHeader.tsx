import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.color};

  font-size: 1em;
  min-height: 3em;
  width: 100vw;
  align-items: center;
  margin-bottom: 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  user-select: none;
  transition: background 0.3s linear;
`;
