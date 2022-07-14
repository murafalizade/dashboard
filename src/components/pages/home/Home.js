import React from 'react'
import { Keyword } from './compos/keyword/Keyword'
import Topic from './compos/topic/Topic'
import { Container, Row, Col } from 'react-bootstrap'
import './Home.scss'
import Type from './compos/type/Type'
import { Content } from './compos/content/Content'
import { TableWrapper } from './compos/tables/Table'
import { Map } from './compos/map/Map'

export const Home = () => {
  return (
    <div className='home_page'>
      <Container>
        <Row>

          <Col md={6}>
            <Map />
          </Col>

          <Col md={6}>
            <Map />

          </Col>
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


          <Col md={6}>
            <TableWrapper contentTitle={'Bakı Kəndləri'} />
          </Col>

          <Col md={6}>
            <TableWrapper contentTitle={'İnzibati Rayonlar'} />
          </Col>

        </Row>
      </Container>
    </div>
  )
}
