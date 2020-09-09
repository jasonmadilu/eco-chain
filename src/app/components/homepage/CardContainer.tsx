import React from 'react';
import imageDefault from '../../assets/318x180.svg';
import {
  Button, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Col, Row
} from 'reactstrap';
import './styles/CardContainer.css';

export class CardContainer extends React.Component {
  render() {
    return (
      <div>
        <Row className="card-container">
          <Col sm="5">
            <Card>
              <CardImg top width="100%" src= { imageDefault } alt="Card image cap" />
              <CardBody>
                <CardTitle>Produit</CardTitle>
                <CardSubtitle>99</CardSubtitle>
                <CardText>Une petite description pour donner envie au vistieur d'en apprendre un peu plus sur le produit..</CardText>
                <Button color="primary" className="card-button">Voir le produit</Button>
              </CardBody>        
            </Card>
          </Col>
          <Col sm="5">
            <Card>
              <CardImg top width="100%" src= { imageDefault } alt="Card image cap" />
              <CardBody>
                <CardTitle>Produit</CardTitle>
                <CardSubtitle>99</CardSubtitle>
                <CardText>Une petite description pour donner envie au vistieur d'en apprendre un peu plus sur le produit...</CardText>
                <Button color="primary" className="card-button">Voir le produit</Button>
              </CardBody>        
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

