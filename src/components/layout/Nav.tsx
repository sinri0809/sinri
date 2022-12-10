import { Link } from 'react-router-dom';

import links from "pages/links";

const Nav = () => {
  return <nav>
    <ul>
      <li><Link to={links.home}>home</Link></li>
      <li><Link to={links.content}>content</Link></li>
    </ul>
  </nav>
}

export default Nav;