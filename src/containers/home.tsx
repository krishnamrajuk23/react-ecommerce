import NavBar from "../components/NavBar";
import Button from "../theme/components/button/Button";
import Card from "../theme/components/card/Card";
import { Timer } from "../theme/components/timer/Timer";


function HomeContainer() {
  const handleClick = (event: Event) => {
    console.log("handle Click", event)
  }
  return (
    <div className="home">
      <NavBar></NavBar>
      <Timer/>
      <Card title="simple card">
        <p>This is random card</p>
        <div>asdfasfsdafsdf</div>
        <Button name="view" bType="primary" click={handleClick}></Button>
      </Card>
    </div>
  );
}

export default HomeContainer;
