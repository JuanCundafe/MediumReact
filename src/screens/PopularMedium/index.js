import React, { Component } from "react";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
  Container,
  Row,
  Col,
} from "reactstrap";

import "./PopularMedium.css";
class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      subtite: "",
      content: "",
      img_autor: "",
      autor: "",
      new_date: "",
      section: "",
      poust: [],
    };
  }
  render() {
    return (
      <Container>
        <Row xs="2">
          <Col xs="8">
            <div className=" imgPopular mt-5">
              <Card className="border-0">
                <CardImg
                  top
                  width="100%"
                  src="https://cdn.bioguia.com/embed/913568c9a5b3f0bccf49552211ab0f61526568090/--Como_saber_si_eres_medium-_Si_tienes_estos_sintomas-_has_nacido_con_facultades_para_serlo"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle className="">
                    The 5 Least Subtle Dog-Whistles About Kamala Harris, Ranked
                  </CardTitle>
                  <CardText>
                    <p>Y’all scared, huh? You should be.</p>
                  </CardText>
                  <CardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                      <hr />
                    </small>
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col xs="4" className="mt-5">
            <p className="textLeftPopular">Popular on Medium</p>
            <p className="subtituloPopular">
              What’s trending on Medium right now.
            </p>
          </Col>
        </Row>
        <Row className="rows  ">
          <Col xs="8" className="columns d-flexs">
            <Card className="border-0">
              <CardBody className="cardPopular">
                <CardText className="cardPopular">
                  <CardTitle>
                    Card Title This is a wider card with supporting text below
                    as a natural lead-in to additional content. This content is
                    a little bit longer.
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </CardTitle>
                  <div>
                    <CardImg
                      className="imgPopularInfinito ml-5"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTblnfqWs78H_xiVg0wuO7Un3MnENIogUygjQ&usqp=CAU"
                      alt="Card image cap"
                    />
                  </div>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs="4">col</Col>
        </Row>
      </Container>
    );
  }
}

export default Popular;
