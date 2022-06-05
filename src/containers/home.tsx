
import { useState } from "react";
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
