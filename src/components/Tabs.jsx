import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

export default function Tabs({tab, setTab}) {
    return (
        <Nav className="mb-5" pills>
            <NavItem>
                <NavLink 
                active={tab === 0 ? true:false} onClick={() => setTab(0)}
                >
                Best Seller
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink active={tab === 1 ? true:false} onClick={() => setTab(1)}>
                    Tables
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink disabled>
                    Chairs
                </NavLink>
            </NavItem>
        </Nav>
    )
}