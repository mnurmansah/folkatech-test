import React from 'react';
import { Accordion, Col, Card, Row, Button, Modal, Form, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import './Navibar.scss';

const Navibar = () => (
  <>
    <Card className="mb-0 pd-12 header-jumbotron" style={{borderRadius:"0"}}>
        <div className="d-flex justify-content-between text-center pdb-24">
          <Col></Col>
          <Col>
            <Row>
              <Col lg={8} md={8} xs={8} className="mb-0 mt-2 fs-14">
                <InputGroup size="sm">
                  <Form.Control
                    placeholder="Cari produk"
                  />
                  <Button variant="outline-secondary" id="button-addon2">
                  X
                  </Button>
                </InputGroup>
              </Col>
              <Col lg={4} md={4} xs={4}>
              </Col>
            </Row>
            <div className="mb-0 fs-14"></div>
          </Col>
        </div>
      </Card>
  </>
);

export default Navibar;
