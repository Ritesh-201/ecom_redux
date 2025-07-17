
import styles from './Navbar.module.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HamburgerIcon from './HamburgerIcon';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Our Store', path: '/store' },
  { name: 'Cart', path: '/cart' },
  { name: 'Order History', path: '/orders' },
  { name: 'Help', path: '/help' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    setOpen(false);
    navigate('/');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <div className={styles.logo}>Ecom Demo</div>
        <div className={styles.menuIcon} onClick={() => setOpen(!open)}>
          <HamburgerIcon size={28} color="#2d3748" isOpen={open} />
        </div>
        <ul className={`${styles.navLinks} ${open ? styles.open : ''}`}>
          {navLinks.map(link => (
            <li key={link.name}>
              <Link to={link.path} onClick={() => setOpen(false)}>{link.name}</Link>
            </li>
          ))}
          {isAuthenticated ? (
            <li>
              <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
            </li>
          ) : (
            <li>
              <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
