import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;

  overflow-x: hidden;

  align-items: center;
  justify-content: center;

  padding: 16px 40px;

  @media (max-width: 640px) {
    padding: 16px 16px;
  }

  @media (max-width: 340px) {
    flex-direction: column;
  }
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

  @media (max-width: 420px) {
    h1 {
      font-size: 24px;
    }
    h2 {
      font-size: 14px;
      letter-spacing: 5px;
    }
  }

  @media (max-width: 280px) {
    h1 {
      font-size: 20px;
    }
    h2 {
      font-size: 12px;
      letter-spacing: 4px;
    }
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

  @media (max-width: 640px) {
    display: none;
  }
`;

export const DrawerButton = styled.button`
  align-self: right;
  margin-left: auto;

  display: none;
  height: 48px;
  width: 48px;

  margin-top: 12px;

  background-color: transparent;
  border: 0;
  color: #777;

  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 340px) {
    margin: 0;
    margin-top: 12px;
  }
`;

export const DrawertContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-bottom: 32px;

  a {
    margin-top: 24px;
    width: 90%;

    text-align: center;

    text-transform: uppercase;
    text-decoration: none;
    color: #222;

    background-color: transparent;

    font-size: 20px;
  }
`;
