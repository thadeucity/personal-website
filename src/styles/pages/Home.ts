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

  @media (max-width: 640px) {
    padding: 16px;
  }

  @media (max-width: 640px) {
    padding: 4px;
  }
`;

export const AboutCard = styled.div`
  display: flex;
  width: 100%;

  border-radius: ${(props) => props.theme.effects.borderRadius};
  overflow: hidden;

  align-items: center;

  background: #fff;

  box-shadow: ${(props) => props.theme.effects.boxShadow};

  img {
    width: 225px;
    height: 225px;
  }

  @media (max-width: 640px) {
    flex-direction: column;

    padding: 32px 16px;

    img {
      border-radius: ${(props) => props.theme.effects.borderRadius};
      box-shadow: ${(props) => props.theme.effects.boxShadow};
      margin-bottom: 16px;
    }
  }

  @media (max-width: 340px) {
    padding: 16px 8px;
  }
`;

export const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding: 32px;
  text-align: justify;

  span {
    font-size: 22px;
    font-weight: 500;
  }

  @media (max-width: 920px) {
    text-align: left;
  }

  @media (max-width: 720px) {
    padding: 16px;
    font-size: 14px;

    span {
      font-size: 18px;
    }
  }
`;

export const Resume = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;

  margin-top: 32px;

  width: 100%;

  background: #fff;

  box-shadow: ${(props) => props.theme.effects.boxShadow};
  border-radius: ${(props) => props.theme.effects.borderRadius};
  overflow: hidden;

  section {
    & + section {
      margin-top: 40px;
    }

    h2 {
      font-size: 24px;
      font-weight: 700px;
    }

    ul {
      list-style-type: none;

      color: #999;

      li {
        padding-left: 32px;
        border-bottom: 1px solid #e8e8e8;
        margin-top: 8px;
        padding-bottom: 8px;
      }

      .course,
      .experience {
        display: flex;
        align-items: center;
        justify-content: left;
        padding-top: 8px;

        h4 {
          margin-left: 8px;
          color: ${(props) => props.theme.colors.text};
        }
      }
    }
  }

  @media (max-width: 640px) {
    font-size: 14px;

    section {
      h2 {
        font-size: 20px;
      }

      ul {
        li {
          padding: 0;
          padding-bottom: 8px;
          text-align: center;
        }

        .course,
        .experience {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }

  @media (max-width: 640px) {
    section {
      h2 {
        margin-top: 16px;
        font-size: 22px;
        text-align: center;
      }
    }
  }
`;
