import Search from '../theme/components/search/Search';
import './NavBar.scss';

function NavBar() {
  const handleEvent = (e: Event) =>{ 
    console.log("handleEvent", e);
  }
  return (
    <div className="nav-bar">
      <Search placeholder="Search Products" handleEvent={handleEvent} width="md"></Search>
    </div>
  );
}

export default NavBar;