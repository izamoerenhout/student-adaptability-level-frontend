import {
    //Button,
    Card,
    //CardBody,
    //CardHeader,
    Col,
    Container,
    Row,
} from "reactstrap";

import PredictLogic from "./Predict-logic";
import Form from "./fragments/Form";
//import Result from "./fragments/Result";

function PredictionCompose() {
    let { result, form } = new PredictLogic()

    return (
        <>
            <Container className="pt-lg-9">
                <Row className="justify-content-center">
                    <Col lg="12">
                        <Card className="bg-secondary shadow border-0">


                            {/* SHOW PREDICTION FORM */}
                            {(result.data === undefined) &&
                                <Form logic={form} />
                            }

                            {/* SHOW RESULT FROM PREDICTION */}
                            {/* {(result.data !== undefined && result.explanation.show === false) &&
                                <Result logic={result} />
                            } */}


                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PredictionCompose;