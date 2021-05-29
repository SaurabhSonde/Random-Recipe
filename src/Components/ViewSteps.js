import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Footer from "./Footer";

const ViewSteps = ({ recipes }) => {
  return (
    <div>
      <Row>
        <Col>
          <Container>
            <h5
              style={{
                textAlign: "left",
                paddingLeft: "50px",
                marginTop: "15%",
                textDecoration: "underline #CCA476",
                textUnderlinePosition: "under",
                textUnderlineOffset: "2px",
                textDecorationThickness: "1px",
              }}
            >
              Steps
            </h5>

            {/* Looping through all recipe steps */}
            {recipes[0]?.analyzedInstructions[0].steps.map((step, index) => (
              <div
                style={{
                  textAlign: "left",
                  marginLeft: "9%",
                  paddingTop: "0.8em",
                  float: "left",
                  lineHeight: "1em",
                }}
                key={index}
              >
                <span style={{ color: "#CCA476" }}>{step.number}. </span>
                <span>{step.step}</span>
              </div>
            ))}
          </Container>
        </Col>

        <Col>
          <img
            src={recipes[0]?.image}
            alt="Failed to load"
            style={{
              paddingTop: "5%",
              height: "630px",
              width: "550px",
            }}
          />
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default ViewSteps;
