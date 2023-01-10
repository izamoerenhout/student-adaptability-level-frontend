import React from "react";
//import { Link } from "react-router-dom";
//import classnames from "classnames";

import {
    //Button,
    Card,
    CardHeader,
    CardBody,
    Container,
    Row,
    Col
} from "reactstrap";

import NavigationBar from "components/NavigationBar.js";
import PageFooter from "components/PageFooter.js";

class Working extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>
                <NavigationBar />
                <main ref="main">
                    <section className="section section-shaped section-lg">
                        <div className="shape shape-style-1 bg-gradient-default">
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                        <Container className="pt-lg-7">
                            <Row className="justify-content-center">
                                <Col lg="8">
                                    <Card className="bg-secondary shadow border-0">
                                        <CardHeader className="bg-white pb-5">
                                            <div className="text-muted text-center mb-2">
                                                <h2 className="display-2 mb-0">How does it work?</h2>
                                            </div>
                                        </CardHeader>
                                        <CardBody className="px-lg-5 py-lg-5">
                                            <p>
                                                This AI can predict how well you are likely to adapt to online classes.
                                                The AI makes this prediction based on your entered data and a trained model.
                                                With the click of a button, it is predicted how well you can adapt to taking
                                                classes online or working from home.
                                            </p>
                                            {/* <div className="text-center">
                                                <Button
                                                    className="my-4"
                                                    color="primary"
                                                    type="button"
                                                    to="/prediction"
                                                    tag={Link}
                                                >
                                                    Make a prediction
                                                </Button>
                                            </div> */}
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </main>
                <PageFooter />
            </>
        )
    }
}

export default Working;