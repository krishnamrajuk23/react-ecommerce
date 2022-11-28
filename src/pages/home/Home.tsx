import Feeds from "../../components/feeds/Feeds";
import NavBar from "../../components/NavBar";
import RightBar from "../../components/rightbar/Rightbar";
import SideBar from "../../components/sidebar/Sidebar";

import './home.scss';

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <div className="homeContainer">
        <SideBar />
        <Feeds />
        <RightBar />
      </div>
    </>
  );
}
