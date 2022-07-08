import React from 'react'
import { Table } from 'react-bootstrap'
import './Table.scss';

export const TableWrapper = ({contentTitle}) => {
    return (
        <div className='comps'>
            <h4>{contentTitle}</h4>
            <div className='table-container'>
                <Table>
                    <thead>
                        <tr>
                            <th>Rayon</th>
                            <th>Ümuni</th>
                            <th>Neqativ rəylər</th>
                            <th>Neytral rəylər</th>
                            <th>Pozitiv rəylər</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bilgəh</td>
                            <td>245</td>
                            <td>54</td>
                            <td>35</td>
                            <td>86
                            </td>

                        </tr>
                        <tr>
                            <td>Zabrat</td>
                            <td>162</td>
                            <td>75</td>
                            <td>53</td>
                            <td>60</td>

                        </tr>
                        <tr>
                            <td>Mərdəkan</td>
                            <td>157</td>
                            <td>13</td>
                            <td>97</td>
                            <td>31</td>

                        </tr>
                        <tr>
                            <td>Maştağa</td>
                            <td>112</td>
                            <td>64</td>
                            <td>35</td>
                            <td>24</td>
                        </tr>

                        <tr>
                            <td>Maştağa</td>
                            <td>112</td>
                            <td>64</td>
                            <td>35</td>
                            <td>24</td>
                        </tr>

                        <tr>
                            <td>Maştağa</td>
                            <td>112</td>
                            <td>64</td>
                            <td>35</td>
                            <td>24</td>
                        </tr>

                        <tr>
                            <td>Maştağa</td>
                            <td>112</td>
                            <td>64</td>
                            <td>35</td>
                            <td>24</td>
                        </tr>

                        <tr>
                            <td>Maştağa</td>
                            <td>112</td>
                            <td>64</td>
                            <td>35</td>
                            <td>24</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
