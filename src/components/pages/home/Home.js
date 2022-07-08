import React from 'react'
import { Keyword } from './compos/keyword/Keyword'
import Topic from './compos/topic/Topic'
import {Container,Row,Col} from 'react-bootstrap'
import './Home.scss'
import Type from './compos/type/Type'
import { Content } from './compos/content/Content'

export const Home = () => {
  return (
    <div className='home_page'>
      <Container>
        <Row>
          <Col md={6}>
            <Topic />
          </Col>

          <Col md={6}>
            <Type />
          </Col>

          <Col md={6}>
            <Keyword />
          </Col>

          <Col md={6}>
            <Content />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
