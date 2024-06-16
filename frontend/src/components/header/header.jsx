import React, { useEffect, useState, useContext } from 'react';
import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faComment, faEnvelope, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { Context } from '../../content';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../images/Logo.png';

function Header() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('');
  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);

  useEffect(() => {
    const navEl = document.querySelector(`.${styles.nav}`);
    const hamburgerEl = document.querySelector(`.${styles.hamburger}`);
    const navItemEls = document.querySelectorAll(`.${styles.navItem}`);

    const toggleNav = () => {
      navEl.classList.toggle(styles.navOpen);
      hamburgerEl.classList.toggle(styles.hamburgerOpen);
    };

    hamburgerEl.addEventListener('click', toggleNav);

    navItemEls.forEach((navItemEl) => {
      navItemEl.addEventListener('click', () => {
        navEl.classList.remove(styles.navOpen);
        hamburgerEl.classList.remove(styles.hamburgerOpen);
      });
    });

    return () => {
      hamburgerEl.removeEventListener('click', toggleNav);
      navItemEls.forEach((navItemEl) => {
        navItemEl.removeEventListener('click', toggleNav);
      });
    };
  }, []);

  const handleLogout = () => {
    setIsAuthorized(false);
    setUser({});
    localStorage.removeItem('jwtToken');
    navigate('/home');
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <header className={classNames(styles.header)}>
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <section className={styles.phone}>
            <FontAwesomeIcon icon={faPhone} />
            <span>+91 9876543210</span>
          </section>
          <section className={styles.email}>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>waawtech@gmail.com</span>
          </section>
          <section className={styles.email}>
            <FontAwesomeIcon icon={faComment} />
            <Link to='/feedback'>
              <span>Feedback</span>
            </Link>
          </section>
          <section className={styles.email}>
            <FontAwesomeIcon icon={faRightToBracket} />
            {isAuthorized ? (
              <span onClick={handleLogout}>Logout</span>
            ) : (
              <Link to="/login">
                <span className='span'>Login/Sign up</span>
              </Link>
            )}
          </section>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className={styles.bottomBarContent}>
          <a href="#" className={styles.logo}>
            <Link to="/home"><img className={styles.logoImg} src={Logo} alt="logo" /></Link>
          </a>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {isAuthorized && (
                <>
                  <li className={classNames(styles.navItem, { [styles.active]: activeItem === 'profile' })} onClick={() => handleItemClick('profile')}>
                    <Link to='/profile'>Profile</Link>
                  </li>
                  <li className={classNames(styles.navItem, { [styles.active]: activeItem === 'userbooking' })} onClick={() => handleItemClick('userbooking')}>
                    <Link to='/userbooking'>Bookings</Link>
                  </li>
                </>
              )}
              <li className={classNames(styles.navItem, { [styles.active]: activeItem === 'home' })} onClick={() => handleItemClick('home')}>
                <Link to="/home">Home</Link>
              </li>
              <li className={classNames(styles.navItem, { [styles.active]: activeItem === 'packages' })} onClick={() => handleItemClick('packages')}>
                <Link to="/package">Packages</Link>
              </li>
              <li className={classNames(styles.navItem, { [styles.active]: activeItem === 'offers' })} onClick={() => handleItemClick('offers')}>
                <Link to="/offer">Offers</Link>
              </li>
              <li className={classNames(styles.navItem, { [styles.active]: activeItem === 'picnic' })} onClick={() => handleItemClick('picnic')}>
                <Link to="/picnic">Picnic</Link>
              </li>
              <li className={classNames(styles.navItem, { [styles.active]: activeItem === 'booking' })} onClick={() => handleItemClick('booking')}>
                <Link to="/booking">
                  <span className={styles.btn}>Book Now</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.hamburger}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
