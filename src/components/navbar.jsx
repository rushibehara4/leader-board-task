import "../App.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand">
            <div className="nav-icon-container">
              <h1 className="nav-icon-head">GILLY'S</h1>
              <p className="nav-icon-para">Koramangala</p>
            </div>
          </a>
          <div className="right-icon-container">
            <div className="nav-icon-container">
              <img
                src="https://raw.githubusercontent.com/LazyIdli-SoftwareTeam/internshal_project_software/4cf813970b5dcdbcd39491bf08d31f0994695f3c/assets/Group%209%20(1).svg"
                alt="right-icon-image"
                className="right-icon-image"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
