import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Container } from "reactstrap";
import { Navbar, Footer, Sidebar } from "./components";
import { Profile, Dashboard, Users, Halls, Programmes, Hall, Block } from "./pages";

class Provider extends React.Component {
    componentDidUpdate(e) {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.mainContent.scrollTop = 0;
    }
    render() {
        return (
            <>
                <Sidebar
                    {...this.props}
                    logo={{
                        innerLink: "/dashboard",
                        imgSrc: require("../../assets/img/brand/argon-react.png"),
                        imgAlt: "..."
                    }}
                />
                <div className="main-content" ref="mainContent">
                    <Navbar
                        {...this.props}
                    />
                    <div className="bg-lighter">
                        <Switch>
                            <Redirect to='/admin/index' from='/admin' exact={true}/>
                            <Route exact={true} path='/admin/index' component={Dashboard}/>
                            <Route exact={true} path='/admin/profile' component={Profile}/>
                            <Route exact={true} path='/admin/users' component={Users}/>
                            <Route exact={true} path='/admin/halls' component={Halls}/>
                            <Route exact={true} path='/admin/programmes' component={Programmes}/>
                            <Route exact={true} path='/admin/block/:_id' component={Block}/>
                            <Route exact={true} path='/admin/hall/:_id' component={Hall}/>
                        </Switch>
                    </div>
                    <Container fluid>
                        <Footer />
                    </Container>
                </div>
            </>
        );
    }
}

export default Provider;