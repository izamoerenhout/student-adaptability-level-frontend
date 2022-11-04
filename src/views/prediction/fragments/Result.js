import { CardBody, CardHeader } from "reactstrap";

function Result(props) {
    const result = props.logic;

    return (
        <>
            <CardHeader className="bg-white pb-3">
                <div className="text-muted text-center mb-2">
                    <h2 className="display-2 mb-0">The result of our prediction</h2>
                </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
                <p>You're {result.data['adaptability']} adpatable to Online Education</p>
            </CardBody>
        </>
    )
}

export default Result;