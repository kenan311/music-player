import React from 'react';
import { Link } from 'react-router-dom'; // Importo Link nga react-router-dom

function Sidebar() {
  return (
    <div className="sidebar">
      <img src="images/EchoTunes.png" alt="EchoTunes" className="logo" />
      <nav>
        <ul>
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="#">Search</Link></li>
          <li><Link to="/Explore">Explore</Link></li> {/* Përdor Link për navigim */}
          <li><Link to="#">Liked Songs</Link></li>
        </ul>
      </nav>
      <div className="playlist">
        <p>Create your first playlist</p>
        <button>Create playlist</button>
      </div>
      <div className="podcasts">
        <p>Let's find some podcasts to follow</p>
        <button>Browse podcasts</button>
      </div>
      <div className="footer-links">
        <Link to="#">Legal</Link>
        <Link to="#">Privacy Policy</Link>
        <Link to="#">Cookies</Link>
        <Link to="#">About Ads</Link>
      </div>
    </div>
  );
}

export default Sidebar;
