import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function Header() {
  return (
        <header>
                <Navbar expand="lg" bg='dark' variant='dark' className="bg-body-tertiary">
                    <Container fluid>
                        <LinkContainer to='/'>
                            <Navbar.Brand >Rover shop</Navbar.Brand>
                        </LinkContainer>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <LinkContainer to='/cart'>
                                <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/login'>
                                <Nav.Link><i className='fas fa-user'></i>Login</Nav.Link>
                                </LinkContainer>
                            </Nav>
                            
                            </Navbar.Collapse>
                </Container>
            </Navbar>         
         </header>
  )
}

export default Header