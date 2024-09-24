// import product from "./product.js";
import products from "./Product";
import Name from "./Name";
import Price from "./Price";
import Image from "./Image";
import Description from "./Description";
import {Card} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const product = products();
  return (
    <>
      <Card style={{width : "18rem" , backgroundColor : "blue" , margin: "25vh auto"}}>
        <Image {...product}/>
        <Name {...product} />
        <Price {...product} />
        <Description {...product} />
      </Card>
      <p>HELLO,There!</p>
    </>
  );
}

export default App;
