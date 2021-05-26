import React from 'react';
import Head from 'next/head';

const EmailHackTest: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Victor Alvarenga EmailHackTest</title>
      </Head>

      <main
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          fontWeight: 700,
          fontSize: '20px',
        }}
      >
        ISH Já era, se você chegou aqui eu consegui quebrar o sistema de email
      </main>
    </div>
  );
};

export default EmailHackTest;
