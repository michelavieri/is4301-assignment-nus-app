import React from 'react';
import styled from 'styled-components';
import Login from '../components/Login';

function admissionPage() {
    const AdmissionPageComponent = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 150px 60px 60px 60px;
        maxWidth: 80rem;

        h1 {
            color: #4A4E69;
        }
    `

    const ApplicationTimelineBox = styled.div`
        background-color: #f5f2f0;
        padding: 20px 40px;
        display: flex;
        justify-content: center;

        ul {
        li:not(:last-child) { 
            margin-bottom: 20px;  
         }
        }
    `

    return (
        <AdmissionPageComponent>
            <h1>Admission</h1>
            <p>Here is the admission timeline:</p>
            <ApplicationTimelineBox>
                <ul>
                    <li>
                        Understanding Admission requirements
                    </li>
                    <li>
                        Submit application online
                    </li>
                    <li>
                        Upload supporting documents
                    </li>
                    <li>
                        Make application fee payment
                    </li>
                    <li>
                        Check application status
                    </li>
                </ul>
            </ApplicationTimelineBox>

            <div style={{ marginTop: '60px' }}>
                <Login />
            </div>
        </AdmissionPageComponent>
    );
}

export default admissionPage;
