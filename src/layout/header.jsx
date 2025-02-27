import { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const menuRef = useRef({
    mainMenu: null,
    serviceMenu: null,
    productMenu: null,
    categoryMenu: null,
    newMenu: null,
  });

  const handleClickOutside = (event) => {
    if (!Object.values(menuRef.current).some(ref => ref && ref.contains(event.target))) {
      setOpenMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const handleMenuItemClick = () => {
    setOpenMenu(null);
  };

  return (
    <div id="app" className="app">
      <div
        id="header-wrapper"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 50,
          backgroundColor: '#007bff',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="navbar navbar-expand-lg navbar-light px-4 py-3 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <a href="/">
              <img
                src="/assets/img/logo/oac3.png"
                alt="Logo"
                style={{ width: '60px', height: '60px', marginRight: '10px' }}
              />
            </a>
            <h1 className="text-white fw-bold m-0" style={{ fontSize: '1.5rem' }}>
              ໂອເອຊີ ໂບຼກເກີ ຈໍາກັດ
            </h1>
          </div>
        </div>
      </div>

      <div
        id="menu-wrapper"
        style={{
          position: 'fixed',
          top: '90px',
          left: 0,
          width: '100%',
          zIndex: 49,
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
        className="d-flex justify-content-center py-1"
      >
        <div className="d-flex align-items-center px-4 w-full">
          <div ref={el => menuRef.current.mainMenu = el} className="dropdown">
            <a
              href="/home"
              onClick={(e) => {
                e.preventDefault();
                toggleMenu('main');
              }}
              className="btn btn-link text-white d-flex align-items-center"
              id="mainMenuButton"
              aria-expanded={openMenu === 'main'}
              style={{ textDecoration: 'none' }}
            >
              <i className="fa fa-home" style={{ fontSize: '20px' }}></i>
              <span className="ms-2 fs-5">ໜ້າຫຼັກ</span>
            </a>
          </div>

          <div ref={el => menuRef.current.productMenu = el} className="dropdown">
            <button
              onClick={() => toggleMenu('product')}
              className="btn btn-link text-white d-flex align-items-center"
              id="productMenuButton"
              aria-expanded={openMenu === 'product'}
              style={{ textDecoration: 'none' }}
            >
              <i className="fa fa-box" style={{ fontSize: '20px' }}></i>
              <span className="ms-2 fs-5">ຜະລິດຕະພັນ</span>
              <i className={`fa fa-chevron-down ms-2 ${openMenu === 'product' ? 'rotate-180' : ''}`}></i>
            </button>
            {openMenu === 'product' && (
              <div className="dropdown-menu show" aria-labelledby="productMenuButton">
                <h6 className="dropdown-header">ຜະລິດຕະພັນອື່ນໆ</h6>
                <a className="dropdown-item text-decoration-none" href="#" onClick={handleMenuItemClick}>Product1</a>
                <a className="dropdown-item text-decoration-none" href="#" onClick={handleMenuItemClick}>Product2</a>
                <a className="dropdown-item text-decoration-none" href="#" onClick={handleMenuItemClick}>Product3</a>
                
                <div className="dropdown-submenu d-flex">
                  <div className="submenu-column">
                    <h6 className="dropdown-header">Column 1</h6>
                    <a className="dropdown-item text-decoration-none" href="#" onClick={handleMenuItemClick}>Submenu Item 1</a>
                    <a className="dropdown-item text-decoration-none" href="#" onClick={handleMenuItemClick}>Submenu Item 2</a>
                    <a className="dropdown-item text-decoration-none" href="#" onClick={handleMenuItemClick}>Submenu Item 3</a>
                  </div>
                  <div className="submenu-column ms-4">
                    <h6 className="dropdown-header">Column 2</h6>
                    <a className="dropdown-item text-decoration-none" href="#" onClick={handleMenuItemClick}>Submenu Item 4</a>
                    <a className="dropdown-item text-decoration-none" href="#" onClick={handleMenuItemClick}>Submenu Item 5</a>
                    <a className="dropdown-item text-decoration-none" href="#" onClick={handleMenuItemClick}>Submenu Item 6</a>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div ref={el => menuRef.current.categoryMenu = el} className="dropdown">
            <button
              onClick={() => toggleMenu('category')}
              className="btn btn-link text-white d-flex align-items-center"
              id="categoryMenuButton"
              aria-expanded={openMenu === 'category'}
              style={{ textDecoration: 'none' }}
            >
              <i className="fa fa-tags" style={{ fontSize: '20px' }}></i>
              <span className="ms-2 fs-5">ໝວດໝູ່</span>
              <i className={`fa fa-chevron-down ms-2 ${openMenu === 'category' ? 'rotate-180' : ''}`}></i>
            </button>
            {openMenu === 'category' && (
              <div className="dropdown-menu show d-flex" aria-labelledby="categoryMenuButton">
               <div className='submenu-column'>
                <h6 className="dropdown-header">ໝວດໝູ່ຫຼັກ</h6>
                <a className="dropdown-item text-decoration-none" href="#" onClick={handleMenuItemClick}>Category1</a>
                <a className="dropdown-item text-decoration-none" href="#" onClick={handleMenuItemClick}>Category2</a>
                <a className="dropdown-item text-decoration-none" href="#" onClick={handleMenuItemClick}>Category3</a>
            </div>
               <div className='submenu-column'>
                <h6 className="dropdown-header">ໝວດໝູ່ຫຼັກ</h6>
                <a className="dropdown-item text-decoration-none" href="#" onClick={handleMenuItemClick}>Category1</a>
                <a className="dropdown-item text-decoration-none" href="#" onClick={handleMenuItemClick}>Category2</a>
                <a className="dropdown-item text-decoration-none" href="#" onClick={handleMenuItemClick}>Category3</a>
            </div>
            </div>
            )}
          </div>

          <div ref={el => menuRef.current.newMenu = el} className="dropdown ms-3">
            <button
              onClick={() => toggleMenu('new')}
              className="btn btn-link text-white d-flex align-items-center"
              id="newMenuButton"
              aria-expanded={openMenu === 'new'}
              style={{ textDecoration: 'none' }}
            >
              <i className="fa fa-newspaper" style={{ fontSize: '20px' }}></i>
              <span className="ms-2 fs-5">New Menu</span>
              <i className={`fa fa-chevron-down ms-2 ${openMenu === 'new' ? 'rotate-180' : ''}`}></i>
            </button>
            {openMenu === 'new' && (
              <div className="dropdown-menu show" aria-labelledby="newMenuButton">
                <h6 className="dropdown-header">New Items</h6>
                <a className="dropdown-item text-decoration-none" href="#" onClick={handleMenuItemClick}>NewItem1</a>
                <a className="dropdown-item text-decoration-none" href="#" onClick={handleMenuItemClick}>NewItem2</a>
                <a className="dropdown-item text-decoration-none" href="#" onClick={handleMenuItemClick}>NewItem3</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
