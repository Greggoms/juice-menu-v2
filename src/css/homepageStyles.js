import styled from "styled-components"

export const HomepageContainer = styled.section`
  height: 100%;

  .login {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    color: ${props => props.theme.grayscale.light2};
    margin-bottom: 1rem;
  }

  a.login-btn {
    text-decoration: none;
    color: ${props => props.theme.grayscale.light1};
    border: 3px solid ${props => props.theme.colors.salmon};
    border-top-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    padding: 0.5rem;
  }
`
