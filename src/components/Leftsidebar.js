import React from 'react';
import { MDBListGroup, MDBListGroupItem } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const Leftsidebar = () => {
    return (
        <div className="seftsidebarMenu">
            <MDBListGroup className="menuPart">
                <NavLink exact={true} to="/" activeClassName="activeClass">
                    <MDBListGroupItem className="menuItem">
                        Dashboard
                    </MDBListGroupItem>
                </NavLink>
                
                <NavLink to="/tablePage" activeClassName="activeClass">
                    <MDBListGroupItem className="menuItem">
                        Table Info
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/userinfo" activeClassName="activeClass">
                    <MDBListGroupItem className="menuItem">
                        User Info
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
        </div>
    );
}

export default Leftsidebar;