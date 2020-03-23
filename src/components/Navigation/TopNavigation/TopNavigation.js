import React, {Component} from 'react';

class TopNavigation extends Component {

    render() {
        return (
        <div className="top-fixed-navidation">
          {/* Menu and the Logo */}
          <div className="menu-button">
            <button className="menu-top-bars">
              <i className="fa fa-bars" />
            </button>
            <section className="logo-button-contents" title="Rwanda Pledges Management System">
              <section className="logo-icon" />
              <b className="logo-text align-middle">PMS</b>
            </section>
          </div>

          {/* Search component */}
          <div className="main-search-containner">
            <section className="input-search">
              <button className="search">
                <i className="fa fa-search" />
              </button>
              <input type="search"  className="input-search-text" />
              <button className="arrow-bottom">
                <i className="fa fa-angle-down" />
              </button>
            </section>
          </div>

          {/* buttons */}
          <div className="buttons-section">
            <section>
              <button className="btn help-button">
                <i className="fa fa-info-circle" />
              </button>
            </section>

            <section>
              <button className="btn apps-buttn">
                <i className="fa fa-th" />
              </button>
            </section>
            <section>
            
              <button className="btn user-button">
                <i className="fa fa-user-circle" />
              </button>
            </section>
          </div>

        </div>
      );
        }
}

export default TopNavigation;
