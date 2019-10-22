import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Row,
    Col,
} from 'reactstrap';
import { BeatLoader } from 'react-spinners';

import { authActions, structureActions } from '../../../store/actions';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email_address: '',
            admission_year: '',
            first_name: '',
            last_name: '',
            dob: '',
            gender: '',
            other_names: '',
            programme: '',
        };
        this.props.getProgrammes();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("ststsststs",this.state);
        this.props.register(this.state);
    }

    render() {
        const { running, programmes } = this.props;
        const { email_address, first_name, last_name, other_names, dob, gender, programme, admission_year } = this.state;
        return (
            <div className="container-fluid d-flex justify-content-center">
                <Col lg="6" md="7" className="align-self-center">
                    <Card className="bg-secondary shadow border-0 mt-5">
                        <CardHeader className="bg-transparent pb-4">
                            <div className="text-muted text-center mt-2 mb-3">
                                <small>Residential Application</small>
                            </div>
                        </CardHeader>
                        <CardBody className="px-lg-5 py-lg-4">
                            <form name="form" onSubmit={this.handleSubmit}>
                                <div className="text-muted text-center mb-4">
                                    <small>Register</small>
                                </div>
                                <div className="row">
                                    <div className="form-group col">
                                        <label htmlFor="first_name">First Name</label>
                                        <input type="text" name="first_name" id="first_name" className="form-control"  value={first_name} onChange={this.handleChange} required/>
                                    </div>
                                    <div className="form-group col">
                                        <label htmlFor="last_name">Last Name</label>
                                        <input type="text" name="last_name" id="last_name" className="form-control" value={last_name} onChange={this.handleChange} required/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="other_names">Other Names</label>
                                    <input type="text" name="other_names" id="other_names" className="form-control" value={other_names} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email_address" id="email_address" className="form-control" required value={email_address} onChange={this.handleChange}/>
                                </div>
                                <div className="row">
                                    <div className="form-group col">
                                        <label htmlFor="dob">Date of Birth</label>
                                        <input type="date" name="dob" id="dob" className="form-control" required value={dob} onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group col">
                                        <label htmlFor="gender">Gender</label>
                                        <select name="gender" id="gender" className="form-control" required defaultValue="male" value={gender} onChange={this.handleChange}>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="form-group col">
                                        <label htmlFor="programme">Programme</label>
                                        <select name="programme" id="programme" className="form-control" required value={programme} onChange={this.handleChange}>
                                            {programmes && programmes.map((programme)=>(
                                                <option value={programme._id}>{programme.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group col">
                                        <label htmlFor="admission_year">Admission Year</label>
                                        <select name="admission_year" id="admission_year" className="form-control" required value={admission_year} onChange={this.handleChange}>
                                            <option value="2016">2016</option>
                                            <option value="2017">2017</option>
                                            <option value="2018">2018</option>
                                            <option value="2019">2019</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Button className="my-4" color="primary">
                                        {running?<BeatLoader size={10}/>:"sign up"}
                                    </Button>
                                </div>
                            </form>
                        </CardBody>
                    </Card>
                    <Row className="mt-3 mb-5">
                        <Col xs="6">
                            <Link
                                to="/auth/forgot"
                                className="text-primary"
                                href="#pablo"
                            >
                                <small>Forgot password?</small>
                            </Link>
                        </Col>
                        <Col className="text-right" xs="6">
                            <Link
                                to="/auth/login"
                                className="text-primary"
                                href="#pablo"
                            >
                                <small>Already have an account</small>
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
        state:{running},
        structure:{programmes}
    })=>({
        running,
        programmes
    })
,{
    register: authActions.register,
    getProgrammes: structureActions.getProgrammes
})(RegisterPage);