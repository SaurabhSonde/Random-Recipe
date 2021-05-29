import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const ViewRecipe = ({ recipes }) => {
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
              Ingredients
            </h5>

            {/* Loooing through all recipe ingredients */}
            {recipes[0]?.extendedIngredients.map((ingredient, index) => (
              <div
                style={{
                  textAlign: "left",
                  marginLeft: "9%",
                  paddingTop: "6%",
                  float: "left",
                  lineHeight: "1em",
                }}
                key={index}
              >
                <span style={{ color: "#CCA476" }}>{ingredient.name}</span>
              </div>
            ))}
            <Link to="/viewsteps">
              <Button
                variant="outline-secondary"
                size="md"
                style={{
                  color: "#CCA476",
                  borderRadius: "0",
                  marginTop: "16em",
                  marginLeft: "1.7em",
                  float: "left",
                }}
              >
                View Steps
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="16"
                  fill="black"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </Button>
            </Link>
          </Container>
        </Col>
        <Col style={{ marginTop: "2.3em" }}>
          <h5
            style={{
              textAlign: "left",
              paddingLeft: "50px",
              textDecoration: "underline #CCA476",
              textUnderlinePosition: "under",
              textUnderlineOffset: "2px",
              textDecorationThickness: "1px",
              marginBottom: "1em",
            }}
          >
            Quantity
          </h5>
          {/*  Loooing through all recipe ingredients quantity*/}
          {recipes[0]?.extendedIngredients.map((ingredient, index) => (
            <div
              style={{
                textAlign: "left",
                marginLeft: "9%",
                float: "left",
                lineHeight: "1.5em",
              }}
              key={index}
            >
              <span>{ingredient.original}</span>
            </div>
          ))}
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

export default ViewRecipe;
