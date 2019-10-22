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
    Container,
    Row,
    Col
} from "reactstrap";
import Header from "../components/Header";
import { structureActions } from "../../../store/actions";
import Axios from "axios";
import { ImageFilter9 } from "material-ui/svg-icons";

class Application extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.props.getHalls();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        let { block, hall} = this.state;
        let {getHall, getBlock} = this.props;
        if(hall){
            getHall(hall);
            if(block){
                getBlock(block)
            }
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const { room, block, hall } = this.state;
        this.props.registerRoom({room, block, hall});
    }

    render() {
        let {halls,blocks, rooms} = this.props;
        let {hall, block, room} = this.state;
        return (
            <>
                <Header />
                {/* Page content */}
                <Container className="mt--7 pb-5" fluid>
                    <Row>
                        <Col className="order-xl-1" xl="8"  id="profile">
                            <Card className="bg-secondary shadow">
                                <CardHeader className="bg-white border-0">
                                    <Row className="align-items-center">
                                        <Col xs="8">
                                            <h3 className="mb-0">Residential Application</h3>
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <Form onSubmit={this.handleSubmit}>
                                    <CardBody>
                                        <h6 className="heading-small text-muted mb-4">
                                            Please select a hall, block and room
                                        </h6>
                                        <div className="pl-lg-4">
                                            <Row>
                                                <Col md="12">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-institution"
                                                        >
                                                            Hall
                                                        </label>
                                                        <select className="form-control" id="block" type="text" value={hall} onChange={this.handleChange}>
                                                            {halls && halls.map((item, key)=>(
                                                                <option key={key} value={item._id}>{item.name}</option>
                                                            ))}
                                                        </select>
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
                                                            Block
                                                        </label>
                                                        <select className="form-control" id="block" type="text" value={block} onChange={this.handleChange}>
                                                            {blocks && blocks.map((item, key)=>(
                                                                <option key={key} value={item._id}>{item.name}</option>
                                                            ))}
                                                        </select>
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
                                                            Room Number
                                                        </label>
                                                        <select className="form-control" id="block" type="text" value={room} onChange={this.handleChange}>
                                                            {rooms && rooms.map((item, key)=>(
                                                                <option key={key} value={item._id}>{item.number}</option>
                                                            ))}
                                                        </select>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </div>
                                    </CardBody>
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
        structure: {halls, block: {rooms}, hall: {blocks}}
    })=>({
        halls,
        blocks,
        rooms
    })
    ,{
        getHalls: structureActions.getHalls,
        getHall: structureActions.getHall,
        getBlock: structureActions.getBlock,
        registerRoom: structureActions.registerRoom
    }
)(Application);
