import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Button, Card } from "react-bootstrap";

const Services = ({ service }) => {
  const { serviceName, images, details, icon } = service;

  return (
    <section>
      <article className="container w-100">
        <Card className="w-100 border-0">
          <Card.Img variant="top" src={images} />
          <Card.Body>
            <Card.Title>{serviceName} <span>{icon}</span> </Card.Title>

            <Card.Text>{details}</Card.Text>
            <Button variant="success opacity-75 rounded-3 ">
              See More <ArrowRightIcon
            style={{ wide: "15px", height: "25px" }}
          ></ArrowRightIcon>
            </Button>
          </Card.Body>
        </Card>
      </article>
    </section>
  );
};

export default Services;
