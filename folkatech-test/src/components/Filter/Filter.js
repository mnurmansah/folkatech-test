import React from 'react';
import {
  Card, Form, Col, Row, Accordion
} from 'react-bootstrap';
import './Filter.scss';

const Filter = () => (
  <>
    <div className="filter">
      <Accordion defaultActiveKey="0" alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>URUT BERDASARKAN</Accordion.Header>
          <Accordion.Body>
            <Form.Group>
              <Form.Label><b style={{ color: "black" }}>HARGA</b></Form.Label>
              <Form.Range />
              <Form className="form-group color fs-14">
                <Row>
                  <Col>
                    <Row>
                      <Col sm={2}><Form.Label>Rp.</Form.Label></Col>
                      <Col sm={10}><Form.Control type="text" placeholder="50.000" disabled />
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                        <Col sm={2}><Form.Label>Rp.</Form.Label></Col>
                        <Col sm={10}><Form.Control type="text" placeholder="2.250.000" disabled />
                        </Col>
                      </Row>
                    </Col>
                </Row>
              </Form>
            </Form.Group>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Origin</Accordion.Header>
          <Accordion.Body>
            <div className="form-group color fs-14">
              <Form.Group>
                {['checkbox'].map((type) => (
                  <div key={`${type}`}>
                    <Form.Check label="Aceh" type={type} id={`${type}-1`} />
                    <Form.Check label="Semarang" type={type} id={`${type}-2`} />
                    <Form.Check label="Bandung" type={type} id={`${type}-3`} />
                    <Form.Check label="Jawa" type={type} id={`${type}-4`} />
                    <Form.Check label="Amerika Selatan" type={type} id={`${type}-5`} />
                    <Form.Check label="Lain - Lain" type={type} id={`${type}-6`} />
                  </div>
                ))}
              </Form.Group>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Spesies</Accordion.Header>
          <Accordion.Body>
            <div className="form-group color fs-14">
              <Form.Group>
                {['checkbox'].map((type) => (
                  <div key={`${type}`}>
                    <Form.Check label="Arabika" type={type} id={`${type}-1`} />
                    <Form.Check label="Robusta" type={type} id={`${type}-2`} />
                    <Form.Check label="Blend" type={type} id={`${type}-3`} />
                  </div>
                ))}
              </Form.Group>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Roast Level</Accordion.Header>
          <Accordion.Body>
            <div className="form-group color fs-14">
              <Form.Group>
                {['checkbox'].map((type) => (
                  <div key={`${type}`}>
                    <Form.Check label="Light Roast" type={type} id={`${type}-1`} />
                    <Form.Check label="Medium Roast" type={type} id={`${type}-2`} />
                    <Form.Check label="Dark Roast" type={type} id={`${type}-3`} />
                    <Form.Check label="Light to Medium Roast" type={type} id={`${type}-4`} />
                  </div>
                ))}
              </Form.Group>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Tasted</Accordion.Header>
          <Accordion.Body>
            <div className="form-group color fs-14">
              <Form.Group>
                {['checkbox'].map((type) => (
                  <div key={`${type}`}>
                    <Form.Check label="Sweet" type={type} id={`${type}-1`} />
                    <Form.Check label="Floral" type={type} id={`${type}-2`} />
                    <Form.Check label="Fruity" type={type} id={`${type}-3`} />
                    <Form.Check label="Nutty" type={type} id={`${type}-4`} />
                    <Form.Check label="Cocoa" type={type} id={`${type}-5`} />
                    <Form.Check label="Spices" type={type} id={`${type}-6`} />
                  </div>
                ))}
              </Form.Group>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Processing</Accordion.Header>
          <Accordion.Body>
            <div className="form-group color fs-14">
              <Form.Group>
                {['checkbox'].map((type) => (
                  <div key={`${type}`}>
                    <Form.Check label="Honey White" type={type} id={`${type}-1`} />
                    <Form.Check label="Natural" type={type} id={`${type}-2`} />
                    <Form.Check label="Honey Gold" type={type} id={`${type}-3`} />
                    <Form.Check label="Honey Yellow" type={type} id={`${type}-4`} />
                  </div>
                ))}
              </Form.Group>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  </>
);

export default Filter;
