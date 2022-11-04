import {
    Button,
    //Card,
    CardBody,
    CardHeader,
    //Col,
    //Container,
    //Row,
} from "reactstrap";

function Form(props) {
    const form = props.logic;

    return (
        <>
            <CardHeader className="bg-white pb-3">
                <div className="text-muted text-center mb-2">
                    <h2 className="display-2 mb-0">Find out how well <b>you</b> can adapted to online education</h2>
                </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
                <form onSubmit={form.onSubmit}>
                    <div className="row content-inside">
                        <div className="col-12">
                            {form.errors !== undefined && <>
                                <div className="alert alert-warning" role="alert">
                                    <b>Oeps.. something went wrong:</b>
                                    {form.errors.map((error, index) => {
                                        return (<div key={index}> [-] {error} </div>)
                                    })}
                                </div>
                            </>}
                        </div>

                        <div className="col-md-12 col-lg-6">
                            <label className="form-label">What is your gender?</label>
                            <div className="row ml-1 mb-3">
                                <div className="custom-control custom-radio pr-3">
                                    <input
                                        className="custom-control-input"
                                        id="customRadio1"
                                        name="custom-radio-1"
                                        type="radio"
                                        value={form.data.gender = 0.0}
                                    />
                                    <label className="custom-control-label" htmlFor="customRadio1">
                                        <span>Boy</span>
                                    </label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input
                                        className="custom-control-input"
                                        id="customRadio2"
                                        name="custom-radio-1"
                                        type="radio"
                                        value={form.data.gender = 1.0}
                                    />
                                    <label className="custom-control-label" htmlFor="customRadio2">
                                        <span>Girl</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-6">
                            <label className="form-label">What is your age?</label>
                            <div className="row ml-1 mb-3">
                                <div className="custom-control custom-radio pr-3">
                                    <input
                                        className="custom-control-input"
                                        id="customRadio1"
                                        name="custom-radio-2"
                                        type="radio"
                                        value={form.data.age = 5.0}
                                    />
                                    <label className="custom-control-label" htmlFor="customRadio1">
                                        <span>1-5</span>
                                    </label>
                                </div>
                                <div className="custom-control custom-radio pr-3">
                                    <input
                                        className="custom-control-input"
                                        id="customRadio2"
                                        name="custom-radio-2"
                                        type="radio"
                                        value={form.data.age = 4.0}
                                    />
                                    <label className="custom-control-label" htmlFor="customRadio2">
                                        <span>6-10</span>
                                    </label>
                                </div>
                                <div className="custom-control custom-radio pr-3">
                                    <input
                                        className="custom-control-input"
                                        id="customRadio1"
                                        name="custom-radio-2"
                                        type="radio"
                                        value={form.data.age = 2.0}
                                    />
                                    <label className="custom-control-label" htmlFor="customRadio1">
                                        <span>11-15</span>
                                    </label>
                                </div>
                                <div className="custom-control custom-radio pr-3">
                                    <input
                                        className="custom-control-input"
                                        id="customRadio1"
                                        name="custom-radio-2"
                                        type="radio"
                                        value={form.data.age = 1.0}
                                    />
                                    <label className="custom-control-label" htmlFor="customRadio1">
                                        <span>16-20</span>
                                    </label>
                                </div>
                                <div className="custom-control custom-radio pr-3">
                                    <input
                                        className="custom-control-input"
                                        id="customRadio1"
                                        name="custom-radio-2"
                                        type="radio"
                                        value={form.data.age = 0.0}
                                    />
                                    <label className="custom-control-label" htmlFor="customRadio1">
                                        <span>21-25</span>
                                    </label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input
                                        className="custom-control-input"
                                        id="customRadio1"
                                        name="custom-radio-2"
                                        type="radio"
                                        value={form.data.age = 3.0}
                                    />
                                    <label className="custom-control-label" htmlFor="customRadio1">
                                        <span>26-30</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="text-center">
                        <Button
                            className="my-4"
                            color="primary"
                            type="submit"
                        >
                            Predict
                        </Button>
                    </div>
                </form>
            </CardBody>


        </>
    )
}

export default Form;