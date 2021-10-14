import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="/portfolio/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/portfolio/AboutUS">About us</Link>
        </li>
        <li>
          <Link to="/portfolio/FAQ">FAQ's</Link>
        </li>
        <li>
          <Link to="/portfolio/Support">Support</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;