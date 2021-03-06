import { ShoppingCartIcon } from "@heroicons/react/solid";
import React from "react";
import { Button, Card } from "react-bootstrap";

const HomeFoods = ({ homefood }) => {
  const { name, picture, information, price } = homefood;
  return (
    <section>

      <Card className="w-100 border-0">
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p>${price}</p>
          <Card.Text>{information}</Card.Text>
          <Button variant="success opacity-75 rounded-3 w-100">
            <ShoppingCartIcon
              style={{ wide: "15px", height: "25px" }}
            ></ShoppingCartIcon>{" "}
            BUY NOW
          </Button>
        </Card.Body>
      </Card>

      
    </section>
  );
};

export default HomeFoods;
