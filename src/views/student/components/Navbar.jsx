import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Navbar,
    Nav,
    Container,
    Media
} from "reactstrap";
import { authActions } from '../../../store/actions';

class AdminNavbar extends React.Component {
    render() {
        let { displayName } = this.props.profile;
        return (
            <>
                <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
                    <Container fluid>
                        <Link
                          className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
                          to="/"
                        >
                            {this.props.brandText}
                        </Link>
                        <Nav className="align-items-center d-none d-md-flex" navbar>
                            <UncontrolledDropdown nav>
                                <DropdownToggle className="pr-0" nav>
                                    <Media className="align-items-center">
                                        <span className="avatar avatar-sm rounded-circle">
                                            <span className="ni ni-single-02"></span>
                                        </span>
                                        <Media className="ml-2 d-none d-lg-block">
                                            <span className="mb-0 text-sm font-weight-bold">
                                                {displayName}
                                            </span>
                                        </Media>
                                    </Media>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-arrow" right>
                                    <DropdownItem className="noti-title" header tag="div">
                                        <h6 className="text-overflow m-0">Welcome!</h6>
                                    </DropdownItem>
                                    <DropdownItem to="/dashboard/profile" tag={Link}>
                                        <i className="ni ni-single-02" />
                                        <span>My profile</span>
                                    </DropdownItem>
                                    <DropdownItem to="/dashboard/profile" tag={Link}>
                                        <i className="ni ni-settings-gear-65" />
                                        <span>Settings</span>
                                    </DropdownItem>
                                    <DropdownItem to="/dashboard/messages" tag={Link}>
                                        <i className="ni ni-support-16" />
                                        <span>Support</span>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem href="#pablo" onClick={() => this.props.logout()}>
                                        <i className="ni ni-user-run" />
                                        <span>Logout</span>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        );
    }
}
export default connect(
    ({
        profile
    })=>({
        profile
    }),{
        logout: authActions.logout
    }
)(AdminNavbar);

