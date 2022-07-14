import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import { Map } from '../home/compos/map/Map'
import './Other.scss';
import { OtherMap } from './otherMap/OtherMap';
import { TextComp } from './textComp/TextComp';

export const Other = () => {
  return (
    <div className='other_page'>

        <Container>
            <Row>
                <Col md={6}><TextComp /></Col>
                <Col md={6}>
                    <OtherMap />
                </Col>
            </Row>
        </Container>
    </div>
  )
}
