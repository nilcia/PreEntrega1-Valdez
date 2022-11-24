import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from '../CardWidget/CardWidget';

const NavbarMenu = () => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">ñañotysucus</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#products">Productos</Nav.Link>
                            <Nav.Link href="#contact">Contacto</Nav.Link>
                            <Nav.Link href="#faqs">Preguntas Frecuentes</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#cart">
                                <CardWidget /> 2
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarMenu;