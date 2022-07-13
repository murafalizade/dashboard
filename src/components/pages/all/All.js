import React from 'react'
import { Container, Form, Row, Table } from 'react-bootstrap'
import './All.scss'

export default function All() {
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
              
              <tr>
                <td>Telefon</td>
                <td>Şikayət</td>
                <td>Neqativ</td>
                <td>Rüşvət, Qovmaq, Prezident </td>
                <td>Bakı, Nəzimi, 345A</td>
              </tr>

              

              <tr>
                <td><a title='Daha ətraflı' href='/hamsi/id'>Internet</a></td>
                <td>Şikayət</td>
                <td>Neqativ</td>
                <td>Rüşvət, Qovmaq, Prezident </td>
                <td>Bakı, Nəzimi, 345A</td>
              </tr>

              <tr>
                <td>Telefon</td>
                <td>Şikayət</td>
                <td>Neqativ</td>
                <td>Rüşvət, Qovmaq, Prezident </td>
                <td>Bakı, Nəzimi, 345A</td>
              </tr>

              <tr>
                <td>Telefon</td>
                <td>Şikayət</td>
                <td>Neqativ</td>
                <td>Rüşvət, Qovmaq, Prezident </td>
                <td>Bakı, Nəzimi, 345A</td>
              </tr>

              <tr>
                <td>Telefon</td>
                <td>Şikayət</td>
                <td>Neqativ</td>
                <td>Rüşvət, Qovmaq, Prezident </td>
                <td>Bakı, Nəzimi, 345A</td>
              </tr>

              <tr>
                <td>Telefon</td>
                <td>Şikayət</td>
                <td>Neqativ</td>
                <td>Rüşvət, Qovmaq, Prezident </td>
                <td>Bakı, Nəzimi, 345A</td>
              </tr>

              <tr>
                <td>Telefon</td>
                <td>Şikayət</td>
                <td>Neqativ</td>
                <td>Rüşvət, Qovmaq, Prezident </td>
                <td>Bakı, Nəzimi, 345A</td>
              </tr>

              <tr>
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
