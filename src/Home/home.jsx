import { useState, useRef, useEffect } from 'react';

const Home = () => {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const mainMenuRef = useRef(null);
  const settingsMenuRef = useRef(null);


  const handleClickOutside = (event) => {
    if (mainMenuRef.current && !mainMenuRef.current.contains(event.target)) {
      setIsMainMenuOpen(false);
    }
    if (settingsMenuRef.current && !settingsMenuRef.current.contains(event.target)) {
      setIsSettingsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div id="app" className="app-">

      <div id="header-wrapper" className="fixed top-0 left-0 w-full z-50 bg-gray-800 shadow-md">
        <div className="navbar navbar-expand-lg navbar-light px-4 py-3 d-flex justify-content-between align-items-center">

          <a href="/" className="navbar-brand text-white d-flex align-items-center">
            <img
              src="/assets/img/logo/oac3.png" 
              alt="Logo"
              style={{ width: '40px', height: '40px', marginRight: '10px' }} 
            />
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>ໂອເອຊີ ໂບຼກເກີ ຈໍາກັດ</span>
          </a>
          <button
            type="button"
            className="navbar-toggler d-md-none"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>

      <div id="menu-wrapper" className="bg-blue-600 py-1">
        <div className="d-flex align-items-center px-4 w-full">
          <div className="menu-item menu-control menu-control-start">
            <a href="javascript:;" className="menu-link" data-toggle="app-top-menu-prev">
              <i className="fa fa-angle-left"></i>
            </a>
          </div>

          <div ref={mainMenuRef} className="dropdown">
            <a
              href="/home"
              onClick={() => setIsMainMenuOpen(!isMainMenuOpen)}
              className="btn btn-link text-white d-flex align-items-center"
              id="mainMenuButton"
              aria-expanded={isMainMenuOpen}
              style={{ textDecoration: 'none' }}
            >
              <i className="fa fa-home" style={{ fontSize: '18px' }}></i> {/* Larger icon */}
              <span className="ms-2">ໜ້າຫຼັກ</span>
            </a>
          </div>

          <div ref={settingsMenuRef} className="dropdown">
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className="btn btn-link text-white d-flex align-items-center"
              id="settingsMenuButton"
              aria-expanded={isSettingsOpen}
              style={{ textDecoration: 'none' }}
            >
              <i className="fa fa-cogs" style={{ fontSize: '24px' }}></i> {/* Larger icon */}
              <span className="ms-2">Settings</span>
              <i className={`fa fa-chevron-down ms-2 ${isSettingsOpen ? 'rotate-180' : ''}`}></i>
            </button>
            <div
              className={`dropdown-menu ${isSettingsOpen ? 'show' : ''}`}
              aria-labelledby="settingsMenuButton"
            >
              <a className="dropdown-item" href="#">Profile</a>
              <a className="dropdown-item" href="#">Security</a>
              <a className="dropdown-item" href="#">Logout</a>
            </div>
          </div>

          <div className="menu-item menu-control menu-control-end">
            <a href="javascript:;" className="menu-link" data-toggle="app-top-menu-next">
              <i className="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="main-content mt-5">
        <div className="container">
          <h1 className="text-center">Welcome to the Home Page</h1>

        </div>
      </div>
    </div>
  );
};

export default Home;
