// Write your Character component here
import React from "react";
import {
  Container,
  Row,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col
} from "reactstrap";

export default function Character(props) {
  //   console.log(props.characters);
  const { characters } = props;
  //   console.log(characters);

  return (
    <Container>
      <Row>
        {characters.map((char, index) => {
          return (
            <Col xs="12" sm="6" md="4">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200"
                  alt="starwars image"
                />
                <CardBody>
                  <CardTitle>Name: {char.name}</CardTitle>
                  <CardSubtitle>Birth Year: {char.birth_year}</CardSubtitle>
                  <CardSubtitle>Height: {char.height}</CardSubtitle>
                  <CardSubtitle>Mass: {char.mass}</CardSubtitle>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
