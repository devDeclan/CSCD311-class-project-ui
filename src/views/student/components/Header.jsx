import React from "react";
import { connect } from "react-redux"
import { Container, Row, Col } from "reactstrap";

class Header extends React.Component {
    render() {
        let {displayName} = this.props.profile;
        return (
            <>
                <div
                    className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                    style={{
                        backgroundImage:
                          "url(" + require("../../../assets/img/theme/profile-cover.jpg") + ")",
                        backgroundSize: "cover",
                        backgroundPosition: "center top"
                    }}
                >
                    {/* Mask */}
                    <span className="mask bg-gradient-green opacity-8" />
                    {/* Header container */}
                    <Container className="d-flex align-items-center" fluid>
                        <Row>
                            <Col lg="7" md="10">
                                <h1 className="display-2 text-white">Hello {displayName}</h1>
                                <p className="text-white mt-0 mb-5">
                                    This is the Residential registration page. Feel free to select a hall of your choice
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
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
  
    }
)(Header);
