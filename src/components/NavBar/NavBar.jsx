import { Navbar } from "reactstrap";
import CartWidget from "./CartWidget"
import NavLinks from "./NavLinks"
import LogoVans from "./LogoVans"
import FavWidget from "./FavWidget"
import LoginWidget from "./LoginWidget";


const NavBar = () => {
    return (
        <Navbar
        light
        container="fluid">
          <LogoVans />
          <NavLinks 
          link="https://github.com/joseottonello" 
          title="Home"/>
          <NavLinks 
          link="https://github.com/joseottonello" 
          title="Contacts"/>
          <NavLinks 
          link="https://github.com/joseottonello" 
          title="Products"/>
          <FavWidget />
          <CartWidget/>
          <LoginWidget />
        </Navbar>
    )
}

export default NavBar