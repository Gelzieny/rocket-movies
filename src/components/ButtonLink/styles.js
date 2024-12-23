import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ContainerLink = styled(Link)`
  padding: 13px 32px;
  gap: 8px;

  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background: ${({ theme }) => theme.COLORS.RED_100};
  border: none;
  border-radius: 8px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
    outline-offset: 2px;
  }
`
