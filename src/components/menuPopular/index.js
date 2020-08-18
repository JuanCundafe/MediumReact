import React from "react";
import "./PopularMedium.css";
function GetPopular({
  title,
  subtitle,
  author,
  new_Date,
  img_url,
  img_author,
}) {
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
          <p className="subtituloPopular">{title}</p>
        </Col>
      </Row>
      <Row className="rows  ">
        <Col xs="8" className="columns d-flexs">
          <Card className="border-0">
            <CardBody className="cardPopular">
              <CardText className="cardPopular">
                <CardTitle>
                  <h1>{title}</h1>
                  <p>
                    <small className="text-muted">{subtitle}</small>
                  </p>
                  <p>{author}</p>
                  <p>{new_Date}</p>
                </CardTitle>
                <div>
                  <CardImg
                    className="imgPopularInfinito ml-5"
                    src={new_Date}
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

export default GetPopular;
