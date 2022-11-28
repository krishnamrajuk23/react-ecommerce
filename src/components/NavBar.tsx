import { Search, Person, Notifications, Chat } from '@mui/icons-material';

import './NavBar.scss';
import '../theme/scss/common.scss';

function NavBar() {
  const handleEvent = (e: Event) =>{ 
    console.log("handleEvent", e);
  }
  return (
    <div className="nav-bar">
      <div className="nav-bar-left">
        <span className="logo">Friend Book</span>
      </div>
      <div className="nav-bar-center">
        <Search className='searchIcon'/>
        <input type="text" className="search" placeholder='Search for friend or post or videos' />
      </div>
      <div className="nav-bar-right">
        <div className="nav-bar-links">
          <span className="nav-bar-link">Home</span>
          <span className="nav-bar-link">Time</span>
        </div>
        <div className="nav-bar-icons">
          <div className="nav-bar-icon">
            <Person />
            <span className="navBarIconBadge">1</span>
          </div>
          <div className="nav-bar-icon">
            <Notifications />
            <span className="navBarIconBadge">1</span>

          </div>
          <div className="nav-bar-icon">
            <Chat />
            <span className="navBarIconBadge">1</span>
          </div>
          <img src="/assets/person/1.jpeg" alt='person-1' className='navBarImg'/>
        </div>
      </div>
    </div>
  );
}

export default NavBar;