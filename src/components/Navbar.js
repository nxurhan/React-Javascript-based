import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarNav, MDBNavItem, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
class Navbar extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <Router>
                <MDBNavbar expand="md" className="navbarMDB">
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                    <PersonOutlineIcon className="iconWhite" /> Profile
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu className="dropdown-default">
                                        <MDBDropdownItem href="/Userinfo">My Account</MDBDropdownItem>
                                        <MDBDropdownItem href="/Login">Logout</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>
                </MDBNavbar>
            </Router>
        );
    }
}

export default Navbar;