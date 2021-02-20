import React from "react";
import { useSelector } from "react-redux";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import SignedOutMenu from "./SinedOutMenu";
import SignedInMenu from "./SignedInMenu";

export default function NavBar({ setFormOpen }) {
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src='/assets/logo.png' alt='logo' style={{ marginRight: 15 }} />
          T-Share
        </Menu.Item>
        <Menu.Item as={NavLink} to='/events' name='Events' />
        <Menu.Item as={NavLink} to='/sandbox' name='Sandbox' />
        {authenticated && (
          <Menu.Item as={NavLink} to='/createEvent'>
            <Button
              basic
              // onClick={() => setFormOpen(true)}
              inverted
              content='Create Event'
            />
          </Menu.Item>
        )}
        {authenticated ? <SignedInMenu /> : <SignedOutMenu />}
      </Container>
    </Menu>
  );
}
