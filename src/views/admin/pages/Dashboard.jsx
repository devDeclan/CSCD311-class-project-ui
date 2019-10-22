import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Button,
    Container,
    Row,
    Col
} from "reactstrap";


import {Header} from "../components";

class Dashboard extends React.Component {
    render() {
        return (
            <>
                <Header />
                {/* Page content */}
                <Container className="mt--7 pb-5" fluid>
                    <Row>
                        <Col className="mb-5 mb-xl-0" xl="12">
                            <Card className="bg-gradient-white shadow">
                                <CardHeader className="bg-transparent">
                                    <Row className="align-items-center">
                                        <div className="col">
                                            <h6 className="text-uppercase text-green text-darker ls-1 mb-1">
                                                Featured
                                            </h6>
                                            <h2 className="text-green mb-0">Popular Courses</h2>
                                        </div>
                                        <div className="col">
                                            <div className="float-right">
                                                <Button
                                                    className="py-2 px-3 text-uppercase text-green"
                                                    href="#pablo"
                                                >
                                                    <span>See All</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <div className="scrolling">
                                        
                                    </div>
                                </CardBody>
                            </Card>
                        </Col> 
                    </Row>
                    <Row>
                        <Col className="mb-5 mt-5 mb-xl-0" xl="12">
                            <Card className="bg-gradient-green shadow">
                                <CardHeader className="bg-transparent">
                                    <Row className="align-items-center">
                                        <div className="col">
                                            <h2 className="text-white mb-0">My Courses</h2>
                                        </div>
                                        <div className="col">
                                            <div className="float-right">
                                                <Button
                                                    className="py-2 px-3"
                                                    data-toggle="tab"
                                                    href="#pablo"
                                                    onClick={e => this.toggleNavs(e, 2)}
                                                >
                                                    <span>See All</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <div className="scrolling">
                                        
                                    </div>
                                </CardBody>
                            </Card>
                        </Col> 
                    </Row>
                </Container>
            </>
        );
    }
}

export default Dashboard;
