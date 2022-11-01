import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import NUSLogo from '../assets/nus_logo.png';

function navbar() {
    const NavBarComponent = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 20px;
        position: absolute;
        background-color: #F2E9E4;
        gap: 80px;
        padding: 40px 0px;
        a {
            color: #4a4e69;
            text-decoration: none;
            font-weight: 600;
            font-size: 16px;
            font-family: Open Sans;
        }
    `
    return (
        <div>
            <NavBarComponent>
                <img src={NUSLogo} alt='' height={40} />
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/academics">
                    Academics
                </NavLink>
                <NavLink to="/admission">
                    Admission
                </NavLink>
            </NavBarComponent>
        </div>
    );
}

export default navbar;
