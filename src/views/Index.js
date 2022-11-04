import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  CardBody,
  Card
} from "reactstrap";

// core components
import NavigationBar from "components/NavigationBar.js";
import PageFooter from "components/PageFooter.js";

// index page sections
//import Hero from "./IndexSections/Hero.js";
//import Buttons from "./IndexSections/Buttons.js";
//import Inputs from "./IndexSections/Inputs.js";
//import CustomControls from "./IndexSections/CustomControls.js";
//import Menus from "./IndexSections/Menus.js";
//import Navbars from "./IndexSections/Navbars.js";
//import Tabs from "./IndexSections/Tabs.js";
//import Progress from "./IndexSections/Progress.js";
//import Pagination from "./IndexSections/Pagination.js";
//import Pills from "./IndexSections/Pills.js";
//import Labels from "./IndexSections/Labels.js";
//import Alerts from "./IndexSections/Alerts.js";
//import Typography from "./IndexSections/Typography.js";
//import Modals from "./IndexSections/Modals.js";
//import Datepicker from "./IndexSections/Datepicker.js";
//import TooltipPopover from "./IndexSections/TooltipPopover.js";
// import Carousel from "./IndexSections/Carousel.js";
// import Icons from "./IndexSections/Icons.js";
// import Login from "./IndexSections/Login.js";
// import Download from "./IndexSections/Download.js";

class Index extends React.Component {
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
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="10">
                      <h1 className="display-3 text-white">
                        How well can you adapt to online education or working online?{" "}
                      </h1>
                      <p className="lead text-white">
                        Have you ever wondered why you find it difficult to take the class online?
                        That must have been the case during the Covid-19 period. Take the test and
                        find out if taking online classes is for you or find out which factors are
                        causing you to fail.
                      </p>
                      <Button className="btn-1" color="default" type="button" href="/prediction">
                        Make a prediction
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Container>

              <Card className="col-lg-8 shadow center mt-6">
                <CardBody>
                  <h2>
                    How does it work?
                  </h2>
                  <p>Wondering how we draw the conclusion? Then go to this page!</p>
                  <Button className="btn-1" color="default" type="button" href="/how-does-it-work">
                    How does it work?
                  </Button>
                </CardBody>
              </Card>

              <Card className="col-lg-8 shadow center mt-6">
                <CardBody>
                  <h2>
                    How do we handle your data?
                  </h2>
                  <p>
                    The entered data is used only once by our trained AI.
                    That is why it is never stored anywhere on our servers,
                    we do this because we value your privacy!
                  </p>
                </CardBody>
              </Card>

              <Card className="col-lg-8 shadow center mt-6">
                <CardBody>
                  <h2>
                    Why is the prediction reliable?
                  </h2>
                  <p>
                    The data was collected by researchers through questionnaires
                    in the region of Bangladesh. The dataset is from
                    <a href="https://www.kaggle.com/datasets/mdmahmudulhasansuzan/students-adaptability-level-in-online-education"> Kaggle</a>.
                  </p>
                </CardBody>
              </Card>

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
            </section>
          </div>
        </main>
        <PageFooter />
      </>
    );
  }
}

export default Index;
