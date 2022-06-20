import { useState } from "react";
import { ButtonGroup, Button } from "reactstrap";

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial)

    const suma = () => count !== props.stock && setCount(count + 1)
    const resta = () => count !== props.initial && setCount(count - 1)

    return (
      <ButtonGroup>
        <Button 
        color = "danger"
        onClick={resta}>
          -
        </Button>
        <Button
        color="danger"
        outline>{count}
        </Button>
        <Button 
        color = "danger"
        onClick={suma}>
          +
        </Button>
      </ButtonGroup>
    );
  }
  
  export default ItemCount;