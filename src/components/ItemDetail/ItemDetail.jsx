import { UncontrolledCarousel } from "reactstrap";

const ItemDetail = ({ props }) => {

  return (
      <div>
        <h1>{props.name}</h1>
        <h3>{props.price}</h3>
        <UncontrolledCarousel
        items={[
          {
            key: 1,
            src: `${props.img}`
          },
          {
            key: 2,
            src: `${props.img2}`
          },
          {
            key: 3,
            src: `${props.img3}`
          }
        ]}
       />
    </div>
  )

}

export default ItemDetail