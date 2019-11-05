import React from 'react';

export default props => (
    <header className="main-header">
        <a href="/#/" className="logo">
            <span className="logo-mini"> <b>S</b>w</span>
            <span className="logo-lg">
                <i className="fa fa-money"></i>
                <b> Sigmer</b> Web
            </span>
        </a>
        <nav className="navbar navbar-static-top">
            <a href className="sidebar-toggle" data-toggle="offcanvas"></a>
        </nav>
    </header>
);