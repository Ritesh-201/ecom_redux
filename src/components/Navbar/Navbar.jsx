
import styles from './Navbar.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerIcon from './HamburgerIcon';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Our Store', path: '/store' },
  { name: 'Cart', path: '/cart' },
  { name: 'Order History', path: '/orders' },
  { name: 'Help', path: '/help' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Redux-Ecom</div>
      <div className={styles.menuIcon} onClick={() => setOpen(!open)}>
        <HamburgerIcon size={28} color="#2d3748" />
      </div>
      <ul className={`${styles.navLinks} ${open ? styles.open : ''}`}>
        {navLinks.map(link => (
          <li key={link.name}>
            <Link to={link.path} onClick={() => setOpen(false)}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
