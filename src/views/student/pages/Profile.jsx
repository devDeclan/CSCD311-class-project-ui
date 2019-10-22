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
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { authActions } from "../../../store/actions";

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleSettings = this.toggleSettings.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.state = {
            settings: true,
            edit: false
        }
    }
    
    handleSubmit(e){
        e.preventDefault();
    }

    toggleSettings(e){
        e.preventDefault();
        this.setState({settings: !this.state.settings});
    }

    toggleEdit(e){
        e.preventDefault();
        this.setState({edit: !this.state.edit});
    }

    render() {
        let {profile} = this.props;
        let {settings, edit} = this.state;
        console.log(profile)
        return (
            <>
                <Header/>
                {/* Page content */}
                <Container className="mt--7 pb-5" fluid>
                    <Row>
                        <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
                            <Card className="bg-secondary shadow">
                                <CardHeader className="bg-white border-0">
                                    <Row className="align-items-center">
                                        <Col>
                                            <h3 className="mb-0">Residency</h3>
                                        </Col>
                                        <Col className="text-right">
                                            <Link
                                                className="btn btn-primary btn-sm"
                                                color="primary"
                                                to="/dashboard/application"
                                                size="sm"
                                            >
                                                <span>Edit</span>
                                            </Link>
                                        </Col>
                                    </Row> 
                                </CardHeader>
                                <CardBody>
                                    <Row >
                                        <Col>
                                            <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-email"
                                                >
                                                    Hall
                                                </label>
                                                <Input
                                                    className="form-control"
                                                    id="input-email"
                                                    defaultValue={profile.email_address}
                                                    type="text"
                                                    readOnly
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-email"
                                                >
                                                    Block
                                                </label>
                                                <Input
                                                    className="form-control"
                                                    id="input-email"
                                                    defaultValue={profile.email_address}
                                                    type="text"
                                                    readOnly
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <label
                                                    className="form-control-label"
                                                    htmlFor="input-email"
                                                >
                                                    Room
                                                </label>
                                                <Input
                                                    className="form-control"
                                                    id="input-email"
                                                    defaultValue={profile.email_address}
                                                    type="text"
                                                    readOnly
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
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
                                                                Student ID
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                defaultValue={profile.id_number}
                                                                id="id_number"
                                                                readOnly
                                                                type="text"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="6">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="email_address"
                                                            >
                                                                Email address
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="email_address"
                                                                defaultValue={profile.email_address}
                                                                readOnly
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
                                                                htmlFor="first_name"
                                                            >
                                                                First name
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                defaultValue={profile.first_name?profile.first_name:null}
                                                                id="first_name"
                                                                readOnly
                                                                type="text"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="6">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="last_name"
                                                            >
                                                                Last name
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                defaultValue={profile.last_name?profile.last_name:null}
                                                                id="last_name"
                                                                readOnly
                                                                type="text"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="other_names"
                                                            >
                                                                Other names
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                defaultValue={profile.other_names?profile.other_names:null}
                                                                id="other_names"
                                                                readOnly
                                                                type="text"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md="6">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="dob"
                                                            >
                                                                Date of Birth
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                defaultValue={Date(profile.dob).slice(0,15)}
                                                                readOnly
                                                                id="dob"
                                                                type="text"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md="6">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="gender"
                                                            >
                                                                Gender
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                defaultValue={profile.gender}
                                                                id="gender"
                                                                readOnly
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
                                                                htmlFor="addmission_year"
                                                            >
                                                                Admission Year
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                defaultValue={profile.admission_year.slice(0,4)}
                                                                id="admission_year"
                                                                readOnly
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
                                                                defaultValue={profile.programme}
                                                                id="programme"
                                                                readOnly
                                                                type="text"
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
                                                Change pin
                                            </h6>
                                            <div className="pl-lg-4">
                                                <Row>
                                                    <Col md="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-password-1"
                                                            >
                                                                Old pin
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-password-1"
                                                                placeholder="Enter your current pin"
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
                                                                htmlFor="input-password-1"
                                                            >
                                                                New pin
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-password-1"
                                                                placeholder="Enter new 5-digit pin"
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
                                                                Repeat pin
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-password-2"
                                                                placeholder="Repeat pin"
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
        
    }
)(Profile);
