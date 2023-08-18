import styled from 'styled-components'
import { gray_300, gray_800, tablet_size } from '../../../styles/Tokens'

export const PostListBox = styled.ul`
  margin: 8rem auto 0;

  @media (min-width: ${tablet_size}) {
    width: 80%;
  }
`

export const PostListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 2rem;
  margin-top: 2rem;
  list-style: none;
  border-bottom: solid 1px ${gray_800};

  h2 {
    color: ${gray_300};
  }
`