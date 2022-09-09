import styled from 'styled-components';
import { ArrowDown } from 'styled-icons/bootstrap';

import ImgMobile from '../../assets/image-header-mobile.jpg';
import ImgDesktop from '../../assets/image-header-desktop.jpg';

export const Container = styled.div`
    width: 100vw;
    height: 50vh;

    text-align: center;

    background-color: var(--blue);
    background-image: url(${ImgMobile});
    background-position: bottom;
    background-size: cover;

    @media screen and (min-width: 768px){
        background-image: url(${ImgDesktop});
        background-size: contain;
        background-repeat: no-repeat;
    }  
`;

export const Title = styled.h1`
    text-transform: uppercase;
    font-family: 'Fraunces', serif;
    color: var(--white);

    padding-top: 10%;
    padding-bottom: 1rem;

    @media screen and (min-width: 1440px){
        padding-top: 5%;
    }
`;

export const ArrowIcon = styled(ArrowDown)`
    width: 50px;
    height: 50px;

    color: var(--white);
`;