import React, { useEffect, useState } from 'react';
import { Accordion,Breadcrumb, Col, Card, Row, Button, Modal, Form, InputGroup, DropdownButton, Dropdown, Container, Nav } from 'react-bootstrap';
// import "./Loading.css";
import ProductCard from './ProductCard/ProductCard';
import QuickHistory from './QuickHistoryCard/QuickHistory';
import Navibar from '../../components/Navibar/Navibar';
import Filter from '../../components/Filter/Filter';
import './Dashboard.scss'

function Dashboard(props) {

  const [state, setState] = useState({
    data: [],
    limit: 5,
    activePage: 1
  });

  // const handlePageChange = (pageNumber) => {
  //   setState((prev) => ({ ...prev, activePage: pageNumber }));
  //   axios
  //     .get(`https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}`)
  //     .then((res) => {
  //       setState((prev) => ({
  //         ...prev,
  //         data: res.data
  //       }));
  //     })
  //     .catch((error) => console.log(error));
  // };


  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=${state.limit}`
      )
      .then((res) => {
        setState((prev) => ({
          ...prev,
          data: res.data
        }));
      })
      .catch((error) => console.log(error));
  }, [state.limit]);

  const [cars, setCars] = React.useState(
    [ 
      {
        src: './images/cars-search/cars1-search.svg',
        name: 'Nissan',
        last_name: 'Qashqai',
        location: 'Newyork',
        init_location: ', NY',
        username: 'Hary Roberts',
        year: '2005',
        view: '1.6',
        mode: 'Automatic',
        km: '16000 miles',
        price: '$25000',
        type: 'Sedan',
        dinamo: 'Front-wheel',
        oil: 'Petrol',
        date: '25 March,2013',
        star: './images/cars-search/star.svg',
      },
      {
        src: './images/cars-search/cars2-search.svg',
        name: 'Nissan',
        last_name: 'Qashqai',
        location: 'Newyork',
        init_location: ', NY',
        username: 'Hary Roberts',
        year: '2005',
        view: '1.6',
        mode: 'Automatic',
        km: '16000 miles',
        price: '$25000',
        type: 'Sedan',
        dinamo: 'Front-wheel',
        oil: 'Petrol',
        date: '25 March,2013',
        star: './images/cars-search/star.svg',
      },
      {
        src: './images/cars-search/cars3-search.svg',
        name: 'Nissan',
        last_name: 'Qashqai',
        location: 'Newyork',
        init_location: ', NY',
        username: 'Hary Roberts',
        year: '2005',
        view: '1.6',
        mode: 'Automatic',
        km: '16000 miles',
        price: '$25000',
        type: 'Sedan',
        dinamo: 'Front-wheel',
        oil: 'Petrol',
        date: '25 March,2013',
        star: './images/cars-search/star.svg',
      },
      {
        src: './images/cars-search/cars4-search.svg',
        name: 'Nissan',
        last_name: 'Qashqai',
        location: 'Newyork',
        init_location: ', NY',
        username: 'Hary Roberts',
        year: '2005',
        view: '1.6',
        mode: 'Automatic',
        km: '16000 miles',
        price: '$25000',
        type: 'Sedan',
        dinamo: 'Front-wheel',
        oil: 'Petrol',
        date: '25 March,2013',
        star: './images/cars-search/star.svg',
      }
    ]
  );

  return (
    <>
      <Navibar />
      <Row style={{ backgroundColor: "#F5F5F5" }}>
        <div className="pdx-40">
          <div className="flex-fill bd-highlight" style={{ width: '200px' }}>
            <Form.Group>
              <Row>
                <Col>
                  <Form.Control as="select" className="bg-dropdown">
                    <option>BELANJA</option>
                  </Form.Control>
                </Col>
              </Row>
            </Form.Group>
          </div>
        </div>
      </Row>
      <div className="pdx-40">
        <Row className="fs-12 pt-4">
        <Breadcrumb className="p-0">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">
            Produk
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Roasted Bean</Breadcrumb.Item>
        </Breadcrumb>
        </Row>
        <Row className="fs-12 pdx-8">
          <Col sm={4}>
          <Filter />
          </Col>
          <Col sm={8}>
          <Row>
            <div className="d-flex justify-content-between pt-4 fs-18">
              <Col><p className="text-left">Menampilkan</p></Col>
              <Col><p className="text-end">Urutkan</p></Col>
            </div>
          </Row>
          <Row>
            {
                state.data.map((car, index) => (
                  <Col xs={6} md={4} className={index % 2 === 0 ? 'pb-2' : 'pt:2'} key={index}>
                    <ProductCard
                      car={car}
                    />
                  </Col>
                ))
              }
          </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
