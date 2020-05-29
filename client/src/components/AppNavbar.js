import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component {
    // constructor(props) {
    //     super(props);
    state = {
        isOpen: false
    }

        // Binding 'this' for toggle is needed as it is not included by default, so it is done in the constructor, but to avoid it we can also use arrow functions
        // this.toggle = this.toggle.bind(this);
    // }

    // So now we do not have to bind 'this'
    // Since we are using arrow functions we don't necessarily need a constructor, we can still create a 'state'
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
                <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">
                            Mern Shopping List
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://github.com/pratyushagarwal22">
                                        GitHub
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }

}
export default AppNavbar;





















