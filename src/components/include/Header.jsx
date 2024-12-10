import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router"

const Header = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/login" className="nav-link">로그인</Link>
                        <Link to="/notice/list" className="nav-link">공지사항</Link>
                        <Link to="/kmap" className="nav-link">카카오맵</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header