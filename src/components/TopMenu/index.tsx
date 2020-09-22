import React from 'react';
import Link from 'next/link';

import { Container, Logo, Menu } from './styles';

const TopMenu: React.FC = () => {
  return (
    <Container>
      <Logo>
        <h1>Victor Alvarenga</h1>
        <h2>Fullstack Developer</h2>
      </Logo>

      <Menu>
        <Link href="/">
          <a>About</a>
        </Link>

        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </Menu>
    </Container>
  );
};

export default TopMenu;
