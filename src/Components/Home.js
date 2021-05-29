import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = ({ recipes }) => {
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
              RECIPES
            </h5>

            {/* Title of Recipe */}
            <p
              style={{
                textAlign: "left",
                fontSize: "4em",
                fontWeight: "lighter",
                paddingTop: "6%",
                lineHeight: "60px",
                marginLeft: "8%",
              }}
            >
              {recipes[0]?.title}
            </p>

            {/* Key Points */}
            <div
              style={{
                textAlign: "left",
                marginLeft: "9%",
                paddingTop: "6%",
                float: "left",
              }}
            >
              <span style={{ color: "#CCA476", display: "inline" }}>
                Health Score:
              </span>

              <span
                style={{
                  color: "#CCA476",
                  display: "inline",
                  marginLeft: "4em",
                }}
              >
                Servings:
              </span>
              <span
                style={{
                  color: "#CCA476",
                  display: "inline",
                  marginLeft: "4em",
                }}
              >
                Vegetarian:
              </span>
              <span
                style={{
                  color: "#CCA476",
                  display: "inline",
                  marginLeft: "4em",
                }}
              >
                Time:
              </span>
            </div>

            {/* Key Points Values */}
            <div
              style={{
                textAlign: "left",
                marginLeft: "9%",
                float: "left",
              }}
            >
              <span style={{ marginLeft: "2em", display: "inline" }}>
                {recipes[0]?.healthScore}
              </span>
              <span
                style={{
                  display: "inline",
                  marginLeft: "7.8em",
                  textAlign: "center",
                }}
              >
                {recipes[0]?.servings}
              </span>

              <span
                style={{
                  display: "inline",
                  marginLeft: "7.3em",
                }}
              >
                {recipes[0]?.vegetarian === true ? "Yes" : "No"}
              </span>

              <span
                style={{
                  display: "inline",
                  marginLeft: "6.1em",
                }}
              >
                {recipes[0]?.readyInMinutes}
              </span>
            </div>

            <div
              style={{
                textAlign: "left",
                marginLeft: "9%",
                paddingTop: "13%",
                float: "left",
              }}
            >
              <Link to="/viewrecipe">
                <Button
                  variant="outline-secondary"
                  size="md"
                  style={{
                    color: "#CCA476",
                    borderRadius: "0",
                  }}
                >
                  View Recipe
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
            </div>
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
              marginLeft: "50px",
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
