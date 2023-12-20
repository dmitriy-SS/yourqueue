import styled from 'styled-components';
export const Switcher = styled.label`
  align-items: center;
  display: flex;
  width: 3em;
  input {
    display: none;
  }

  div {
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 1em;
    align-items: center;

    padding: 0.3em;
    border-radius: 1em;

    background-color: ${({ theme }) => theme.backgroundColor};
    cursor: pointer;
    transition: 0.4s;
  }

  div:before {
    position: absolute;

    content: '';
    width: 1em;
    height: 1em;

    background-color: ${({ theme }) => theme.primary};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + div:before {
    -webkit-transform: translateX(2em);
    -ms-transform: translateX(2em);
    transform: translateX(2em);
  }
`;
