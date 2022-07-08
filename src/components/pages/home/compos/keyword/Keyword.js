import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import './Keyword.scss';
import { ProgressCircle } from './ProgressCircle/ProgressCircle';

export const Keyword = () => {
  return (
    <div className='keyword comps'>
      <h4>Açar Sözlər</h4>
      <Container>
        <Row>
          {new Array(6).fill().map((i) => (
            <Col md={4}>

              <ProgressCircle />
            </Col>
          ))}
        </Row>
      </Container>

    </div>
  )
}
