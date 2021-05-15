import styled from 'styled-components'
import theme from '../../theme'

export const Button = styled.button`
  background-color: ${theme.gray};
  border: 1px solid #000;
  box-shadow: 2px 2px #000;
  padding: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: 4px 4px #000;
  }

  &:active {
    box-shadow: 2px 2px 2px #000, inset 0 0 1px #000;
  }
`
