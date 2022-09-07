import styled from "styled-components"

export const HomepageContainer = styled.section`
  h1 {
    margin-bottom: 1rem;
  }

  button {
    cursor: pointer;
    border: none;
    background: ${props => props.theme.colors.linkDark};
    color: ${props => props.theme.grayscale.light1};
    padding: 0.75rem;
    border-radius: 0.5rem;

    a {
      text-decoration: none;
      color: ${props => props.theme.grayscale.light1};
    }
  }
`
