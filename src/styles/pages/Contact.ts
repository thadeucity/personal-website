import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  overflow-x: hidden;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  padding: 32px;

  width: 100%;
  max-width: 1000px;
`;

export const ContactCard = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 32px;

  border-radius: ${(props) => props.theme.effects.borderRadius};
  overflow: hidden;

  align-items: center;

  background: #fff;

  box-shadow: ${(props) => props.theme.effects.boxShadow};

  ul {
    margin: 32px 0;
    list-style-type: none;
    display: flex;

    a {
      color: ${(props) => props.theme.colors.text};
    }

    li + li {
      margin-left: 16px;
    }
  }

  h3 {
    margin-bottom: 24px;
  }

  button {
    border: 0;
    background: #f9f9f9;

    border-radius: ${(props) => props.theme.effects.borderRadius};
    box-shadow: ${(props) => props.theme.effects.boxShadow};

    font-size: 20px;
    font-weight: 500;
    padding: 8px 24px;
  }

  h4 {
    font-size: 20px;
  }
`;
