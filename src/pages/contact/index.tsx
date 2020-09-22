import React, { useRef, useState } from 'react';
import Head from 'next/head';
import ReCAPTCHA from 'react-google-recaptcha';

import anyBase from 'any-base';

import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

import TopMenu from '../../components/TopMenu';

import { Container, Content, ContactCard } from '../../styles/pages/Contact';

const Contact: React.FC = () => {
  const [emailVisible, setEmailVisible] = useState(false);
  const [captchaVisible, setCapchaVisible] = useState(false);

  const [email, setEmail] = useState('');

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const onSubmitWithReCAPTCHA = async (): Promise<void> => {
    const token = recaptchaRef.current?.getValue();

    if (!token) return;

    const converter = anyBase(
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&"()*+-./:<=>?@[]^_`{|}~',
      'abcdefghijklmnopqrstuvwxyz@.',
    );

    setEmailVisible(true);
    setEmail(converter('7?8IxS1hCH/!c+g3>2-Y'));
  };

  return (
    <div>
      <Head>
        <title>Victor Alvarenga Contact</title>
      </Head>

      <main>
        <Container>
          <TopMenu />
          <Content>
            <ContactCard>
              <h2>You can reach me in the following social networks</h2>
              <ul>
                <li>
                  <a
                    href="https://github.com/thadeucity"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FaGithubSquare size="48" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/victoralvarenga/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FaLinkedin size="48" />
                  </a>
                </li>
              </ul>
              <h3>If you prefer you can also send me an email</h3>

              {!emailVisible && !captchaVisible && (
                <button onClick={() => setCapchaVisible(true)} type="button">
                  Show Email
                </button>
              )}

              {!emailVisible && captchaVisible && (
                <form>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    size="normal"
                    sitekey="6Lfn2eQUAAAAAF2CzVnfICFVLpALbo0id9vh0Zwq"
                    onChange={onSubmitWithReCAPTCHA}
                  />
                </form>
              )}

              {emailVisible && <h4>{email}</h4>}
            </ContactCard>
          </Content>
        </Container>
      </main>
    </div>
  );
};

export default Contact;
