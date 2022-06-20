import ItemCount from "../ItemCount/ItemCount";
import { CardGroup, Card, Alert } from 'reactstrap';

const Item = ({props}) => {
  return (
        <CardGroup>
        <Card>
            <img src={props.img} alt="" width="200" />
            <h2> {props.name} </h2>
            <h4> {props.price} </h4>
            <p> {props.detail} </p>
            <div>
                <ItemCount initial={0} stock={10} />
                <Alert
                color="danger">
                  ¡Comprar!
                </Alert>
            </div>
        </Card>
        </CardGroup>
  )
}

export default Item