import logo from '../../img/logo.jpg'
import { CardImg } from 'reactstrap';

const LogoVans = () => {
    const style = {
        width: "6rem",
        height: "3rem"
    }

    return (
        <>
            <CardImg
                alt="Vans Store"
                style={style}
                src={logo}
                />
        </>
    )
}

export default LogoVans