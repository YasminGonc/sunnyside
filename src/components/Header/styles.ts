import styled from 'styled-components';
import { MenuOutline } from 'styled-icons/evaicons-outline';
import { ReactComponent as LogoImg } from '../../assets/logo.svg';

export const Container  = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--blue);
    padding: 1rem
`;

export const Logo = styled(LogoImg)``;

export const NavigationMenu = styled.div`
    display: flex;

    > ul {
        display: none;
    }

    @media screen and (min-width: 768px) {
        > ul {
            display: flex;
            gap: 2rem;

            list-style: none;
        }

        > ul li {
            color: var(--white);
            padding: 0.5rem;
            border-radius: 1.2rem;

            transition: background-color .2;
            cursor: pointer;

            &:hover {
                background-color: var(--white);
                color: var(--blue);
            }
        }
    }
`;

export const MenuIcon = styled(MenuOutline)`
    color: var(--white);

    width: 30px;
    height: 30px;
    
    @media screen and (min-width: 768px) {
        display: none;
    }
`;