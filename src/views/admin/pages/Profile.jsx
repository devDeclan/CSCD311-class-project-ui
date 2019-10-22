import React from "react";
import { connect } from 'react-redux';
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col
} from "reactstrap";
import UserHeader from "../components/UserHeader";
import { authActions } from "../../../store/actions";

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleSettings = this.toggleSettings.bind(this);
        this.state = {
            settings: true
        }
    }
    
    handleSubmit(e){
        e.preventDefault();
    }

    toggleSettings(e){
        e.preventDefault();
        this.setState({settings: !this.state.settings});
    }

    render() {
        let {profile, sendReset} = this.props;
        let {settings} = this.state;
        console.log(profile)
        return (
            <>
                <UserHeader />
                {/* Page content */}
                <Container className="mt--7 pb-5" fluid>
                    <Row>
                        <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
                            <Card className="card-profile shadow">
                                <Row className="justify-content-center">
                                    <Col className="order-lg-2" lg="3">
                                        <div className="card-profile-image">
                                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                                <img
                                                    alt="..."
                                                    className="rounded-circle"
                                                    src={profile.photoURL}
                                                />
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                                    <div className="d-flex justify-content-between">
                                        <Button
                                            className="mr-4"
                                            color="info"
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                            size="sm"
                                        >
                                            Connect
                                        </Button>
                                        <Button
                                            className="float-right"
                                            color="default"
                                            href="#pablo"
                                            onClick={e => e.preventDefault()}
                                            size="sm"
                                        >
                                            Message
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardBody className="pt-0 pt-md-4">
                                    <Row>
                                        <div className="col">
                                            <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                                                <div>
                                                    <span className="heading">22</span>
                                                    <span className="description">Friends</span>
                                                </div>
                                                <div>
                                                    <span className="heading">10</span>
                                                    <span className="description">Photos</span>
                                                </div>
                                                <div>
                                                    <span className="heading">89</span>
                                                    <span className="description">Comments</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                    <div className="text-center">
                                        <h3>
                                            {profile.displayName}
                                            <span className="font-weight-light">, 27</span>
                                        </h3>
                                        <div className="h5 font-weight-300">
                                            <i className="ni location_pin mr-2" />
                                            {profile.education?profile.education.location:null}
                                        </div>
                                        <div className="h5 mt-4">
                                            <i className="ni business_briefcase-24 mr-2" />
                                            {profile.education?profile.education.programme:null}
                                        </div>
                                        <div>
                                            <i className="ni education_hat mr-2" />
                                            {profile.education?profile.education.institution:null}
                                        </div>
                                        <hr className="my-4" />
                                        <p>
                                            {profile.about}
                                        </p>
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            Show more
                                        </a>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="order-xl-1" xl="8"  id="profile">
                            <Card className="bg-secondary shadow">
                                <CardHeader className="bg-white border-0">
                                    <Row className="align-items-center">
                                        <Col xs="8">
                                            <h3 className="mb-0">My account</h3>
                                        </Col>
                                        <Col className="text-right" xs="4">
                                            <Button
                                                color="primary"
                                                href="#pablo"
                                                onClick={this.toggleSettings}
                                                size="sm"
                                            >
                                                {settings?(
                                                    <>
                                                        <span className="d-none d-md-block">Security settings</span>
                                                        <span className="d-md-none">Security</span>
                                                    </>
                                                ):(
                                                    <>
                                                        <span className="d-none d-md-block">Profile settings</span>
                                                        <span className="d-md-none">Profile</span>
                                                    </>
                                                )}
                                            </Button>
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <Form onSubmit={this.handleSubmit}>
                                    {settings && (
                                        <CardBody>
                                            <h6 className="heading-small text-muted mb-4">
                                                User information
                                            </h6>
                                            <div className="pl-lg-4">
                                                <Row>
                                                    <Col lg="6">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-username"
                                                            >
                                                                Username
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                defaultValue={profile.displayName}
                                                                id="input-username"
                                                                placeholder="johndoe"
                                                                type="text"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="6">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-email"
                                                            >
                                                                Email address
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-email"
                                                                defaultValue={profile.email}
                                                                placeholder="john@doe.com"
                                                                type="email"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg="6">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-first-name"
                                                            >
                                                                First name
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                defaultValue={profile.name?profile.name.first:null}
                                                                id="input-first-name"
                                                                placeholder="John"
                                                                type="text"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="6">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-last-name"
                                                            >
                                                                Last name
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                defaultValue={profile.name?profile.name.last:null}
                                                                id="input-last-name"
                                                                placeholder="Doe"
                                                                type="text"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <hr className="my-4" />
                                            {/* Address */}
                                            <h6 className="heading-small text-muted mb-4">
                                                Education information
                                            </h6>
                                            <div className="pl-lg-4">
                                                <Row>
                                                    <Col md="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-institution"
                                                            >
                                                                Institution
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                defaultValue={profile.education?profile.education.institution:null}
                                                                id="input-institution"
                                                                placeholder="University of Damzinium"
                                                                type="text"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-programme"
                                                            >
                                                                Programme
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                defaultValue={profile.education?profile.education.programme:null}
                                                                id="input-address"
                                                                placeholder="BSc. Damzining"
                                                                type="text"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <hr className="my-4" />
                                            {/* Address */}
                                            <h6 className="heading-small text-muted mb-4">
                                                Contact information
                                            </h6>
                                            <div className="pl-lg-4">
                                                <Row>
                                                    <Col md="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-address"
                                                            >
                                                                Address
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                                                id="input-address"
                                                                placeholder="Home Address"
                                                                type="text"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg="4">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-country"
                                                            >
                                                                Country
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                defaultValue="United States"
                                                                id="input-country"
                                                                placeholder="Country"
                                                                type="text"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="4">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-city"
                                                            >
                                                                City
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                defaultValue="New York"
                                                                id="input-city"
                                                                placeholder="City"
                                                                type="text"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="4">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-country"
                                                            >
                                                                Postal code
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-postal-code"
                                                                placeholder="Postal code"
                                                                type="number"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-phone"
                                                            >
                                                                Phone
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                defaultValue={profile.phoneNumber}
                                                                id="input-address"
                                                                placeholder="Home Address"
                                                                type="text"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <hr className="my-4" />
                                            {/* Description */}
                                            <h6 className="heading-small text-muted mb-4">About me</h6>
                                            <div className="pl-lg-4">
                                                <Row>
                                                    <Col md="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-dob"
                                                            >
                                                                About Me
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                placeholder="A few words about you ..."
                                                                rows="4"
                                                                defaultValue={profile.about}
                                                                type="textarea"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-dob"
                                                            >
                                                                Date of Birth
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                defaultValue={profile.dob}
                                                                id="input-dob"
                                                                placeholder="dob"
                                                                type="date"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </CardBody>  
                                    )}
                                    {!settings && (
                                        <CardBody>
                                            <h6 className="heading-small text-muted mb-4">
                                                Change password
                                            </h6>
                                            <div className="pl-lg-4">
                                                <Row>
                                                    <Col md="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-password-1"
                                                            >
                                                                Verification Code
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-token"
                                                                placeholder="Enter verification token sent to your email"
                                                                type="text"
                                                                required
                                                            />
                                                            <small>
                                                                Didn't receive any code?, <a href="." onClick={(e)=>{sendReset(profile.email)}}>resend code</a>
                                                            </small>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-password-1"
                                                            >
                                                                New password
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-password-1"
                                                                placeholder="Enter password"
                                                                type="password"
                                                                required
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-password-2"
                                                            >
                                                                Repeat password
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-password-2"
                                                                placeholder="Repeat password"
                                                                type="password"
                                                                required
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </CardBody>  
                                    )}
                                    <CardFooter>
                                        <Row className="justify-content-end pr-3">
                                            <ButtonGroup>
                                                <Button
                                                    type="reset"
                                                >
                                                    Reset
                                                </Button>
                                                <Button
                                                    color="primary"
                                                    type="submit"
                                                >
                                                    Save
                                                </Button>
                                            </ButtonGroup>
                                        </Row>
                                    </CardFooter>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default connect(
    ({
        profile
    })=>({
        profile
    })
    ,{
        sendReset: authActions.sendReset
    }
)(Profile);
