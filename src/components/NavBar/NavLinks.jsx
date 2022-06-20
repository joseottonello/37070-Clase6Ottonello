import { NavbarBrand } from "reactstrap";

const NavLinks = ({ link, title }) => {
    return (
        <>
            <NavbarBrand 
              href={link}
              target="_blank">
              {title}
            </NavbarBrand>
        </>
    )
}

export default NavLinks