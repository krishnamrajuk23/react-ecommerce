import NavBar from "../components/NavBar";
import Card from "../theme/components/card/Card";

function HomeContainer() {
  return (
    <div className="home">
      <NavBar></NavBar>
      <Card title="simple card">
        <p>This is random card</p>
      </Card>
    </div>
  );
}

export default HomeContainer;
