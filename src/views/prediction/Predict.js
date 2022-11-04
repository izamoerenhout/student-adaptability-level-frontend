import React from "react";
// import classnames from "classnames";

/* import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";
 */
import NavigationBar from "components/NavigationBar.js";
import PageFooter from "components/PageFooter.js";
import PredictionCompose from "./Predict-compose";

class Predict extends React.Component {
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
                    <div className="position-relative">
                        <section className="section section-lg section-shaped pb-250">
                            <div className="shape shape-style-1 shape-default">
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>
                            <div className="separator separator-bottom separator-skew">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="none"
                                    version="1.1"
                                    viewBox="0 0 2560 100"
                                    x="0"
                                    y="0"
                                >
                                    <polygon
                                        className="fill-white"
                                        points="2560 0 2560 100 0 100"
                                    />
                                </svg>
                            </div>

                            <PredictionCompose />

                            {/* <Container className="pt-lg-8">
                                <Row className="justify-content-center">
                                    <Col lg="10">
                                        <Card className="bg-secondary shadow border-0">
                                            <CardHeader className="bg-white pb-3">
                                                <div className="text-muted text-center mb-2">
                                                    <h2 className="display-2 mb-0">Make a prediction</h2>
                                                </div>
                                            </CardHeader>
                                            <CardBody className="px-lg-5 py-lg-5">
                                                <Form role="form">
                                                    <FormGroup className="mb-3">
                                                        <InputGroup className="input-group-alternative">
                                                            <InputGroupAddon addonType="prepend">
                                                                <InputGroupText>
                                                                    <i className="ni ni-email-83" />
                                                                </InputGroupText>
                                                            </InputGroupAddon>
                                                            <Input placeholder="Email" type="email" />
                                                        </InputGroup>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <InputGroup className="input-group-alternative">
                                                            <InputGroupAddon addonType="prepend">
                                                                <InputGroupText>
                                                                    <i className="ni ni-lock-circle-open" />
                                                                </InputGroupText>
                                                            </InputGroupAddon>
                                                            <Input
                                                                placeholder="Password"
                                                                type="password"
                                                                autoComplete="off"
                                                            />
                                                        </InputGroup>
                                                    </FormGroup>
                                                    <div className="text-center">
                                                        <Button
                                                            className="my-4"
                                                            color="primary"
                                                            type="button"
                                                        >
                                                            Predict
                                                        </Button>
                                                    </div>
                                                </Form>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container> */}
                        </section>
                    </div>
                </main>
                <PageFooter />
            </>
        )
    }
}

export default Predict;