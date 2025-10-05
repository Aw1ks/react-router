import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">First page</Link>
      <ul>
        <CustomLink to="/second">Second Page</CustomLink>
        <CustomLink to="/third">Third page</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink ({ children, ...props }) {
    const resolvedPath = useResolvedPath(props.to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});

    return (
        <li className={isActive ? "active" : ""}>
            <Link {...props}>{children}</Link>
        </li>
    )
}

export default NavBar;
