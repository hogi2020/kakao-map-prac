import { Navbar } from "react-bootstrap"

const Footer = () => {
    return (
        <>
            <Navbar className="navbar navbar-expand-sm bg-light justify-content-center" fixed="bottom" bg="dark" style={{color: "white"}}>
                React Comp. Copyright &copy;2024
            </Navbar>
        </>
    )
}


export default Footer