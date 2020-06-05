import React, { Component } from 'react';
class TopBar extends Component {

    render() {
        return (
            <nav className="navbar">
                <span className="navbar-brand navBarTitle">{this.props.title}</span>
            </nav>
        );
    }
}

export default TopBar;
