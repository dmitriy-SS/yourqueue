import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6em;

  background-color: #393948;
  box-shadow: 0px 0px 10px #302f42;
  text-align: left;
  max-width: 15em;
  padding: 0.6em;
  border-radius: 0.6em;

  img {
    max-height: 50%;
    width: 100%;
    border-radius: 0.6em;
    background-repeat: no-repeat;

  }
  > span {
    &:nth-child(2) {
      color: ${({ theme }) => theme.primary};
    }
    &:nth-child(3) {
      color: ${({ theme }) => theme.color};
    }
  }
`;
