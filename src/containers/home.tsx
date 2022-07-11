
import { useState } from "react";
import Alert  from "react-bootstrap/Alert";
import NavBar from "../components/NavBar";
import Button from "../theme/components/button/Button";
import Card from "../theme/components/card/Card";
import ListItem from "../theme/components/list-item/ListItem";
import { Timer } from "../theme/components/timer/Timer";
import Toggle from "../theme/components/toggle/toggle";


function HomeContainer() {
  const [isToggle, setToggle] = useState( true );

  const handleClick = (event: Event) => {
    console.log("handle Click", event);
    setToggle(!isToggle);
  }
  const products = () => {
    const productItems = [{name: 'shirts'}, {name: 'electric'}, {name: 'gadgets'}]
    return (<ul>
      {productItems.map((item, index) => {
        return <ListItem value={item.name} placement="left" key={ index}></ListItem>
      })}
    </ul>)
  }
  

  return (
    <div className="home">
      <NavBar></NavBar>
      <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This example
          text is going to run a bit longer so that you can see how spacing within an
          alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things nice
          and tidy.
        </p>
      </Alert>
      <Timer />
      <Toggle isToggle={isToggle}></Toggle>
      <Card title="simple card">
        <p>This is random card</p>
        <div>asdfasfsdafsdf</div>
        <Button name="view" bType="primary" click={handleClick}></Button>
      </Card>
    </div>
  );
}

export default HomeContainer;
