import React from 'react';
import styled from 'styled-components';
import NUSLogo from '../assets/nus_logo_home.jpg';
import Image1 from '../assets/image_1.png';
import Image2 from '../assets/image_2.png';
import Image3 from '../assets/image_3.png';
import { NavLink } from 'react-router-dom';
import Login from '../components/Login';

function homePage() {

    const HomePageComponent = styled.div`
        padding: 150px 60px 60px 60px;
        display: flex;
        align-items: center;
        gap: 20px;

        h1 {
            color: #4A4E69;
        }
    `

    const NavigationImages = styled.div`
        display: flex;
        justify-content: space-between;
        padding: 0px 60px;
    `

    const ImageButton = styled.div`
        position: relative;

        a {
            color: white;
            text-decoration: none;
            font-weight: 600;
            font-size: 32px;
            font-family: Open Sans;
            letter-spacing: 2px;
        }
    `

    return (
        <div style={{ overflowX: 'hidden', maxWidth: '80rem' }}>
            <HomePageComponent>
                <img src={NUSLogo} alt='' width={300} />
                <h1>NUS is a leading research university in Asia</h1>
                <Login />
            </HomePageComponent>
            <NavigationImages>
                <ImageButton>
                    <img src={Image1} alt='' width={380} />
                    <NavLink style={{
                        position: 'absolute',
                        zIndex: 2,
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                        to="/">HOME</NavLink>
                </ImageButton>
                <ImageButton>
                    <img src={Image2} alt='' width={380} />
                    <NavLink style={{
                        position: 'absolute',
                        zIndex: 2,
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                        to="/academics">ACADEMICS</NavLink>
                </ImageButton>
                <ImageButton>
                    <img src={Image3} alt='' width={380} />
                    <NavLink style={{
                        position: 'absolute',
                        zIndex: 2,
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                        to="/admission">ADMISSION</NavLink>
                </ImageButton>
            </NavigationImages>
        </div>
    );
}

export default homePage;
