import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

export default class NavbarCustom extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar className="Navbar-custom" light expand="md">
                    <NavbarBrand href="/"><img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/BBC_logo_white.svg/2000px-BBC_logo_white.svg.png"
                        style = {{width: 5 + 'em'}}
                    />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto Navbar-custom" navbar>
                            <NavItem>
                                <NavLink className="nav-text" href="/staff">Staff</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-text" href="/user">User</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}