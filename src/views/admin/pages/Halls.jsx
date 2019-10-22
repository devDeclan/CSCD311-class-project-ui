import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  Progress,
  Table,
  Container,
  Row,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";
import { Link } from "react-router-dom";
import { structureActions } from "../../../store/actions";
import Header from "../components/Header";
import { connect } from 'react-redux';

class Halls extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false
        }
        this.props.getHalls();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
    }
    
    toggleModal(){
        this.setState({modal: !this.state.modal})
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e){
        e.preventDefault();
        const { code, name, gender } = this.state;
        this.props.addHall({code, name, gender});
        this.toggleModal();
    }

    render() {
        let { halls, deleteHall } = this.props;
        let { modal, name, code, gender } = this.state;
        return (
            <>
                <Header />
                {/* Page content */}
                <Container className="mt--5 pb-5" fluid>
                    {/* Table */}
                    <Row>
                        <div className="col">
                            <Card className="shadow">
                                <CardHeader className="border-0 d-flex justify-content-between align-items-center">
                                    <h3 className="mb-0">Halls</h3>
                                    <button className="btn btn-primary btn-sm" onClick={this.toggleModal}>New Hall</button>
                                </CardHeader>
                                <Modal isOpen={modal} toggle={this.toggleModal}>
                                    <ModalHeader toggle={this.toggleModal}>
                                        Create Hall
                                    </ModalHeader>
                                    <Form onSubmit={this.handleSubmit} method="POST">
                                        <ModalBody>
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input type="text" placeholder="Name of Hall" name="name" id="name" className="form-control" value={name} onChange={this.handleChange} required/>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col">
                                                    <label htmlFor="code">Code</label>
                                                    <input type="text" placeholder="Hall Code" name="code" id="code" className="form-control" maxLength={4} value={code} onChange={this.handleChange} required/>
                                                </div>
                                                <div className="form-group col">
                                                    <label htmlFor="gender">Gender</label>
                                                    <select name="gender" id="gender" className="form-control" value={gender} onChange={this.handleChange} required>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                        <option value="unisex">Unisex</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </ModalBody>
                                        <ModalFooter>
                                            <button className="btn btn-white" onClick={this.toggleModal}>
                                                Cancel
                                            </button>
                                            <button className="btn btn-primary">
                                                Save
                                            </button>
                                        </ModalFooter>
                                    </Form>
                                </Modal>
                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Code</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">No of Blocks</th>
                                            <th scope="col">No of Rooms</th>
                                            <th scope="col">Current Status</th>
                                            <th scope="col" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {halls && halls.map((item, key)=>(
                                            <tr key={key}>
                                                <th scope="row"><span className="mb-0 text-sm">{item.name}</span></th>
                                                <td>{item.code}</td>
                                                <td>{item.gender}</td>
                                                <td>{item.blocks.length}</td>
                                                <td>1000</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="mr-2">60%</span>
                                                        <div>
                                                            <Progress
                                                                max="100"
                                                                value="60"
                                                                barClassName="bg-danger"
                                                            />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-right">
                                                    <UncontrolledDropdown>
                                                        <DropdownToggle
                                                            className="btn-icon-only text-light"
                                                            href="#pablo"
                                                            role="button"
                                                            size="sm"
                                                            color=""
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <i className="fas fa-ellipsis-v" />
                                                        </DropdownToggle>
                                                        <DropdownMenu className="dropdown-menu-arrow" right>
                                                            <DropdownItem
                                                            >
                                                                <Link to={`/admin/hall/${item._id}`} >
                                                                
                                                                View Hall
                                                                </Link>
                                                            </DropdownItem>
                                                            <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => {e.preventDefault(); deleteHall(item._id)}}
                                                            >
                                                                Delete Hall
                                                            </DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </td>
                                            </tr>
                                        ))}
                                        {halls.length===0 && (
                                            <tr><td colSpan="7" className="text-center"><strong>No Halls Yet. Add Some</strong></td></tr>
                                        )}
                                    </tbody>
                                </Table>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </>
        );
    }
}

export default connect(
  ({
      structure: {halls}
  })=>({
      halls
  })
  ,{
      addHall: structureActions.addHall,
      getHalls: structureActions.getHalls,
      deleteHall: structureActions.deleteHall
  }
)(Halls);
