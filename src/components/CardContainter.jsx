import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "./Cards";
import { data } from "../data";
const CardContainter = ({ cardClass }) => {
  return (
    <Container>
      {cardClass && (
        <Row className=" g-3">
          {data.map((item, i) => {
            return (
              <Col lg={4} xl={4} md={6} className="col-12" key={i}>
                <div
                  className="m-1  "
                  style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
                >
                  <Cards item={item} cardClass={cardClass} />
                </div>
              </Col>
            );
          })}
        </Row>
      )}
      {!cardClass && (
        <Row className=" g-3">
          {data.map((item, i) => {
            return (
              <Col lg={12} xl={12} md={12} className="col-12" key={i}>
                <div
                  className="m-1   "
                  style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
                >
                  <Cards item={item} cardClass={cardClass} />
                </div>
              </Col>
            );
          })}
        </Row>
      )}
    </Container>
  );
};

export default CardContainter;
