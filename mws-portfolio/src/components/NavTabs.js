import React from 'react';

const styles = {
  navPillActive: {
    backgroundColor: "gray",
    color: "Yellow"

  },
  navPillInactive: { 
    //backgroundColor: "Purple",
    color: "Yellow"
  },
  navBar: {
    borderBottom: '2px',
    //backgroundColor: "Purple",
  }
}

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className='d-flex justify-content-end' style={styles.navBar}>
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          style={currentPage === 'About' ? styles.navPillActive : styles.navPillInactive}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          style={currentPage === 'Portfolio' ? styles.navPillActive : styles.navPillInactive}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          style={currentPage === 'Contact' ? styles.navPillActive : styles.navPillInactive}
        >
          Contact
        </a>
      </li>
    </ul>
    </div>
  );
}

export default NavTabs;
