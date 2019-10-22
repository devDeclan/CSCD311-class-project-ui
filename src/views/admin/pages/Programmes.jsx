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

class Programmes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false
        }
        this.props.getProgrammes();
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
        const { code, name } = this.state;
        this.props.addProgramme({code, name});
        this.toggleModal();
    }

    render() {
        let { programmes, deleteProgramme } = this.props;
        let { modal, name, code } = this.state;
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
                                    <h3 className="mb-0">Programmes</h3>
                                    <button className="btn btn-primary btn-sm" onClick={this.toggleModal}>New Programme</button>
                                </CardHeader>
                                <Modal isOpen={modal} toggle={this.toggleModal}>
                                    <ModalHeader toggle={this.toggleModal}>
                                        Create Programme
                                    </ModalHeader>
                                    <Form onSubmit={this.handleSubmit} method="POST">
                                        <ModalBody>
                                            <div className="row">
                                                <div className="form-group col">
                                                    <label htmlFor="code">Code</label>
                                                    <input type="text" placeholder="Programme Code" name="code" id="code" className="form-control" maxLength={4} value={code} onChange={this.handleChange} required/>
                                                </div>
                                                <div className="form-group col">
                                                    <label htmlFor="gender">Name</label>
                                                    <input type="text" placeholder="Programme Name" name="name" id="name" className="form-control" value={name} onChange={this.handleChange} required/>
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
                                            <th scope="col">Code</th>
                                            <th scope="col">Name</th>
                                            <th scope="col" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {programmes && programmes.map((item, key)=>(
                                            <tr key={key}><td>{item.code}</td>
                                                <td>{item.name}</td>
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
                                                                onClick={e => {e.preventDefault(); deleteProgramme(item._id)}}
                                                            >
                                                                Delete
                                                            </DropdownItem>
                                                            <DropdownItem
                                                                href="#pablo"
                                                                onClick={e => {e.preventDefault()}}
                                                            >
                                                                View Rooms
                                                            </DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </td>
                                            </tr>
                                        ))}
                                        {programmes.length===0 && (
                                            <tr><td colSpan="7" className="text-center"><strong>No Programmes Yet. Add Some</strong></td></tr>
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
      structure: {programmes}
  })=>({
      programmes
  })
  ,{
      addProgramme: structureActions.addProgramme,
      getProgrammes: structureActions.getProgrammes,
      deleteProgramme: structureActions.deleteProgramme
  }
)(Programmes);
