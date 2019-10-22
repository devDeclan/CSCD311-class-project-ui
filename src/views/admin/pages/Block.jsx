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
import { structureActions } from "../../../store/actions";
import Header from "../components/Header";
import { connect } from 'react-redux';

class Hall extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            block: this.props.match.params._id
        }
        this.props.getBlock(this.props.match.params._id);
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
        let block = this.props.block._id
        const { number, capacity, gender } = this.state;
        this.props.addRoom({ block, number, capacity, gender});
        this.toggleModal();
    }

    render() {
        console.log(this.props)
        let { deleteRoom, block } = this.props;
        let { modal, number, capacity, gender } = this.state;
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
                                    <h3 className="mb-0">Rooms</h3>
                                    <button className="btn btn-primary btn-sm" onClick={this.toggleModal}>New Room</button>
                                </CardHeader>
                                <Modal isOpen={modal} toggle={this.toggleModal}>
                                    <ModalHeader toggle={this.toggleModal}>
                                        Create Room
                                    </ModalHeader>
                                    <Form onSubmit={this.handleSubmit} method="POST">
                                        <ModalBody>
                                            <div className="form-group">
                                                <label htmlFor="name">Room Number</label>
                                                <input type="text" placeholder="Room number" name="number" id="number" className="form-control" value={number} onChange={this.handleChange} required/>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col">
                                                    <label htmlFor="capacity">Capacity</label>
                                                    <select name="capacity" id="capcity" className="form-control" value={capacity} onChange={this.handleChange} required>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="4">4</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col">
                                                    <label htmlFor="gender">Gender</label>
                                                    <select name="gender" id="gender" className="form-control" value={gender} onChange={this.handleChange} required>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
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
                                            <th scope="col">Room Number</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Capacity</th>
                                            <th scope="col" colSpan={4}>Occupants</th>
                                            <th scope="col" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {block && block.rooms && block.rooms.map((item, key)=>(
                                            <tr key={key}>
                                                <th scope="row"><span className="mb-0 text-sm">{item.number}</span></th>
                                                <td>{item.gender}</td>
                                                <td>{item.capacity}</td>
                                                {item.occupants && item.occupants.map((person)=>(
                                                    <td>{person}</td>
                                                ))}
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
                                                                href="#pablo"
                                                                onClick={e => {e.preventDefault(); deleteRoom(item._id)}}
                                                            >
                                                                Delete
                                                            </DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </td>
                                            </tr>
                                        ))}
                                        {block && block.rooms && block.rooms.length===0 && (
                                            <tr><td colSpan="7" className="text-center"><strong>No Rooms Yet. Add Some</strong></td></tr>
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
      structure: {block}
  })=>({
      block,
  })
  ,{
      addRoom: structureActions.addRoom,
      getBlock: structureActions.getBlock,
      deleteRoom: structureActions.deleteRoom
  }
)(Hall);
