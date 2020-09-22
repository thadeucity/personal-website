import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;

  overflow-x: hidden;

  align-items: center;
  justify-content: center;

  padding: 16px 40px;
`;

export const Logo = styled.div`
  width: auto;
  font-family: 'Montserrat', sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 2px;
  }

  h2 {
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 6px;
    margin-top: -4px;
  }
`;

export const Menu = styled.nav`
  margin-left: auto;

  a {
    color: black;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;

    & + a {
      margin-left: 40px;
    }
  }
`;
