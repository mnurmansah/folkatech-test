import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import './ProductCard.scss';

const ProductCard = ({
  product: {
    src, name, last_name, location, init_location, year, view, mode, km, price, star,
  },
}) => (
  <Link to="/product/supercar123">
    <Card
      className="mgb-2 account-card"
    >
      <Card.Body>
        <Card.Text>
          <img src={src} width="200" height="200" className="image" />
        </Card.Text>
        <Card.Title className="font-weight-normal fs-11">
          <p>
            <b>
              { name }
              <br />
              <p className="link mgt-5">{last_name}</p>
            </b>
          </p>
        </Card.Title>
        <Card.Title>
          <Row>
            <Col>
              <p className="fs-11 font-price">
                { price }
              </p>
            </Col>
          </Row>
        </Card.Title>
      </Card.Body>
    </Card>
  </Link>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
