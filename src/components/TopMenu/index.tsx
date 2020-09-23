import React, { useCallback, useMemo, useState } from 'react';
import Link from 'next/link';

import { SwipeableDrawer } from '@material-ui/core';
import { FiMenu } from 'react-icons/fi';

import {
  Container,
  Logo,
  Menu,
  DrawertContainer,
  DrawerButton,
} from './styles';

const TopMenu: React.FC = () => {
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = useCallback((event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerState((previosState) => !previosState);
  }, []);

  const list = useMemo(
    () => (
      <DrawertContainer>
        <Link href="/">
          <a>About</a>
        </Link>

        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </DrawertContainer>
    ),
    [],
  );

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

      <DrawerButton type="button" onClick={toggleDrawer}>
        <FiMenu size={32} />
      </DrawerButton>

      <SwipeableDrawer
        anchor="top"
        open={drawerState}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        {list}
      </SwipeableDrawer>
    </Container>
  );
};

export default TopMenu;
