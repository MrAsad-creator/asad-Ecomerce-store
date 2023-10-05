    import React from "react";
    import Button from "react-bootstrap/Button";
    import Container from "react-bootstrap/Container";
    import Form from "react-bootstrap/Form";
    import Nav from "react-bootstrap/Nav";
    import Navbar from "react-bootstrap/Navbar";
    import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
    // import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
    import { Link } from "react-router-dom";
    import Styles from './Product.module.css';
    import { useSelector } from 'react-redux';

    const NavComponent = () => {
        const PLength=useSelector(state=>state.card)
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
            <Navbar.Brand to="/" as={Link}>Daraz Store</Navbar.Brand>
            <Nav>
                {/* <Nav.Link to="/">Home</Nav.Link> */}
                <Nav.Link to="/products" as={Link}>Products</Nav.Link>
                
            </Nav>
            <Navbar.Toggle/>
            <Form className={Styles.formBox}>
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-danger">Search</Button>
            </Form>
            <NavbarCollapse className="justify-content-end">
                <Navbar.Text >
                <Nav.Link to='/cart' as={Link}>My Bag {PLength?.length}</Nav.Link>
                </Navbar.Text>
            </NavbarCollapse>


        </Container>
        </Navbar>
    );
    };

    export default NavComponent;
