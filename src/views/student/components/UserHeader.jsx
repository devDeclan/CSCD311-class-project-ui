import React from "react";
import { connect } from "react-redux"
import { Button, Container, Row, Col } from "reactstrap";

class UserHeader extends React.Component {
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
                                    This is your profile page. You can edit your details here
                                </p>
                                <Button
                                    color="info"
                                    onClick={(e)=>this.props.toggleEdit(e)}
                                >
                                    Edit profile
                                </Button>
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
)(UserHeader);
