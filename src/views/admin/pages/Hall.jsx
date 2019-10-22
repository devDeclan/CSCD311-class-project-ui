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
import { Link } from "react-router-dom"
import { structureActions } from "../../../store/actions";
import Header from "../components/Header";
import { connect } from 'react-redux';

class Hall extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            hall: this.props.match.params._id
        }
        this.props.getHall(this.props.match.params._id);
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
        const { hall, code, name, gender } = this.state;
        this.props.addBlock({ hall, code, name, gender});
        this.toggleModal();
    }

    render() {
        console.log(this.props)
        let { deleteBlock, hall } = this.props;
        let { modal, code, name, gender } = this.state;
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
                                    <h3 className="mb-0">Blocks</h3>
                                    <button className="btn btn-primary btn-sm" onClick={this.toggleModal}>New Block</button>
                                </CardHeader>
                                <Modal isOpen={modal} toggle={this.toggleModal}>
                                    <ModalHeader toggle={this.toggleModal}>
                                        Create Block
                                    </ModalHeader>
                                    <Form onSubmit={this.handleSubmit} method="POST">
                                        <ModalBody>
                                            <div className="form-group">
                                                <label htmlFor="name">Block Code</label>
                                                <input type="text" placeholder="Code of Block eg, AA" name="code" id="code" className="form-control" value={code} onChange={this.handleChange} required/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Block Name</label>
                                                <input type="text" placeholder="Name of Block eg. Annex A" name="name" id="name" className="form-control" value={name} onChange={this.handleChange} required/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="gender">Gender</label>
                                                <select name="gender" id="gender" className="form-control" value={gender} onChange={this.handleChange} required>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                    <option value="unisex">Unisex</option>
                                                </select>
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
                                            <th scope="col">Block Code</th>
                                            <th scope="col">Block Name</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Number of Rooms</th>
                                            <th scope="col" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {hall && hall.blocks && hall.blocks.map((item, key)=>(
                                            <tr key={key}>
                                                <th scope="row"><span className="mb-0 text-sm">{item.code}</span></th>
                                                <td>{item.name}</td>
                                                <td>{item.gender}</td>
                                                <td>{item.rooms.length}</td>
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
                                                                onClick={e => e.preventDefault()}
                                                            >
                                                                Edit
                                                            </DropdownItem>
                                                            <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => {e.preventDefault(); deleteBlock(item._id)}}
                                                            >
                                                                Delete
                                                            </DropdownItem>
                                                            <DropdownItem>
                                                                <Link to={`/admin/block/${item._id}`} >
                                                                
                                                                View Block
                                                                </Link>
                                                            </DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </td>
                                            </tr>
                                        ))}
                                        {hall && hall.blocks && hall.blocks.length===0 && (
                                            <tr><td colSpan="7" className="text-center"><strong>No Blocks Yet. Add Some</strong></td></tr>
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
      structure: {hall}
  })=>({
      hall,
  })
  ,{
      addBlock: structureActions.addBlock,
      getHall: structureActions.getHall,
      deleteBlock: structureActions.deleteBlock
  }
)(Hall);
