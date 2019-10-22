import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Input,
    Button,
    Card,
    CardBody,
    CardHeader,
    Row,
    Col,
} from 'reactstrap';
import { BeatLoader } from 'react-spinners';

import { authActions } from '../../../store/actions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { student_id, pin } = this.state;
        if (student_id && pin) {
            this.props.login(this.state);
        }
    }

    render() {
        const { running } = this.props;
        const { student_id, pin } = this.state;
        return (
            <div className="container-fluid vh-100 d-flex justify-content-center">
                <Col lg="5" md="7" className="align-self-center">
                    <Card className="bg-secondary shadow border-0">
                        <CardHeader className="bg-transparent pb-4">
                            <div className="text-muted text-center mt-2 mb-3">
                                <small>Residential Application</small>
                            </div>
                        </CardHeader>
                        <CardBody className="px-lg-5 py-lg-4">
                            <form name="form" onSubmit={this.handleSubmit}>
                                <div className="text-muted text-center mb-4">
                                    <small>Sign in</small>
                                </div>
                                <InputGroup color="danger" className="mb-3">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-email-83" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Your Student ID eg. 10674782" type="text" name="student_id" value={student_id} onChange={this.handleChange} required/>
                                </InputGroup>
                                <InputGroup color="danger" className="mb-3">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-lock-circle-open" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Your 5-digit Pin" type="password" name="pin" value={pin} onChange={this.handleChange} required/>
                                </InputGroup>
                                <div className="text-center">
                                    <Button className="my-4" color="primary">
                                        {running?<BeatLoader size={10}/>:"sign in"}
                                    </Button>
                                </div>
                            </form>
                        </CardBody>
                    </Card>
                    <Row className="mt-3">
                        <Col xs="6">
                            <Link
                                to="/auth/forgot"
                                className="text-primary"
                                href="#pablo"
                            >
                                <small>Forgot pin?</small>
                            </Link>
                        </Col>
                        <Col className="text-right" xs="6">
                            <Link
                                to="/auth/register"
                                className="text-primary"
                                href="#pablo"
                            >
                                <small>Create new account</small>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </div>
        );
    }
}

export default connect(
    ({
        state:{running}
    })=>({
        running
    })
,{
    login: authActions.login
})(LoginPage);
