import React from 'react'
import { Container, Form, Row, Table } from 'react-bootstrap'
import { BrowserRouter as Router} from 'react-router-dom'
import './All.scss'

export default function All({history}) {
  return (
    <div className='comps table-page'>
      <Container>
        <Row>
          <div className='table-header'>
            <h4>Hamısı</h4>
            <div>
              <Form>
                <Form.Select>
                  <option>Hamısı</option>
                </Form.Select>
                <Form.Select>
                  <option>Ötən ay</option>
                  <option>Ötən həftə</option>
                  <option>Ötən rüblük</option>
                  <option>Ötən il</option>
                  <option>Tarix seç</option>

                </Form.Select>
              </Form> 
            </div>
          </div>
          <Table>
            <thead>
              <tr>
                <th>Mövzu</th>
                <th>Növ</th>
                <th>Məzmun</th>
                <th>Açar sözlər</th>
                <th>Ünvan</th>
              </tr>
            </thead>
            <tbody>
              
              <tr onClick={()=>{window.location.href = '/hamsi/id'}}>
                <td>Telefon</td>
                <td>Şikayət</td>
                <td>Neqativ</td>
                <td>Rüşvət, Qovmaq, Prezident </td>
                <td>Bakı, Nəzimi, 345A</td>
              </tr>

              

              <tr onClick={()=>{window.location.href = '/hamsi/id'}}>
                <td>Internet</td>
                <td>Şikayət</td>
                <td>Neqativ</td>
                <td>Rüşvət, Qovmaq, Prezident </td>
                <td>Bakı, Nəzimi, 345A</td>
              </tr>

              <tr onClick={()=>{window.location.href = '/hamsi/sd'}}>
                <td>Telefon</td>
                <td>Şikayət</td>
                <td>Neqativ</td>
                <td>Rüşvət, Qovmaq, Prezident </td>
                <td>Bakı, Nəzimi, 345A</td>
              </tr>

              <tr onClick={()=>{window.location.href = '/hamsi/sd'}}>
                <td>Telefon</td>
                <td>Şikayət</td>
                <td>Neqativ</td>
                <td>Rüşvət, Qovmaq, Prezident </td>
                <td>Bakı, Nəzimi, 345A</td>
              </tr>

              <tr onClick={()=>{window.location.href = '/hamsi/sd'}}>
                <td>Telefon</td>
                <td>Şikayət</td>
                <td>Neqativ</td>
                <td>Rüşvət, Qovmaq, Prezident </td>
                <td>Bakı, Nəzimi, 345A</td>
              </tr>

              <tr onClick={()=>{window.location.href = '/hamsi/sd'}}>
                <td>Telefon</td>
                <td>Şikayət</td>
                <td>Neqativ</td>
                <td>Rüşvət, Qovmaq, Prezident </td>
                <td>Bakı, Nəzimi, 345A</td>
              </tr>

              <tr onClick={()=>{window.location.href = '/hamsi/sd'}}>
                <td>Telefon</td>
                <td>Şikayət</td>
                <td>Neqativ</td>
                <td>Rüşvət, Qovmaq, Prezident </td>
                <td>Bakı, Nəzimi, 345A</td>
              </tr>

              <tr onClick={()=>{window.location.href = '/hamsi/sd'}}>
                <td>Telefon</td>
                <td>Şikayət</td>
                <td>Neqativ</td>
                <td>Rüşvət, Qovmaq, Prezident </td>
                <td>Bakı, Nəzimi, 345A</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>

    </div>
  )
}
