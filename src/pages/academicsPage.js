import React from 'react';
import styled from 'styled-components';

function academicsPage() {
    const AcademicsPageComponent = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 150px 60px 60px 60px;

        h1 {
            color: #4A4E69;
        }
    `
    const ModuleTable = styled.table`
        width: 80%;
        border-collapse: collapse;

        th {
            background-color: #f77d39;
            color: #4A4E69;
        }

        tr {
            background-color: #f5f2f0;
        }

        td, th {      
            border: 1px solid #ddd;
            padding: 12px;
        }
    `

    return (
        <AcademicsPageComponent>
            <h1>Academics</h1>
            <p>Here are the list of modules taught at the university:</p>
            <ModuleTable>
                <tr >
                    <th>Module Code</th>
                    <th>Module Title</th>
                </tr>
                <tr>
                    <td style={{ width: '40%', fontWeight: 600 }}>
                        BT1101
                    </td>
                    <td style={{ width: '60%' }}>
                        Introduction to Business Analaytics
                    </td>
                </tr>
                <tr>
                    <td style={{ width: '40%', fontWeight: 600 }}>
                        BT2101
                    </td>
                    <td style={{ width: '60%' }}>
                        Econometrics Modelling for Business Analytics
                    </td>
                </tr>
                <tr>
                    <td style={{ width: '40%', fontWeight: 600 }}>
                        BT2102
                    </td>
                    <td style={{ width: '60%' }}>
                        Data Management and Visualisation
                    </td>
                </tr>
                <tr>
                    <td style={{ width: '40%', fontWeight: 600 }}>
                        BT2103
                    </td>
                    <td style={{ width: '60%' }}>
                        Optimization Methods in Business Analytics
                    </td>
                </tr>
            </ModuleTable>
        </AcademicsPageComponent>
    );
}

export default academicsPage;
