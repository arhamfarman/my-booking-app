import "./Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className='nav'>
      <Link href='/' className='site-title'>
        Book My Space
      </Link>
      <ul>
        <li>
          <CustomLink to='/'>Home</CustomLink>
        </li>
        <li>
          <CustomLink to='/venues'>Venues</CustomLink>
        </li>
        <li>
          <CustomLink to='/my-bookings'>Booking</CustomLink>
        </li>
        <li>
          <CustomLink to='/login'>Login</CustomLink>
        </li>
        <li>
          <CustomLink to='/register'>Register</CustomLink>
        </li>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
