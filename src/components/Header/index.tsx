import React from 'react';

import { Container, Logo, NavigationMenu, MenuIcon } from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <Logo />
            <NavigationMenu>
                <MenuIcon />
                <ul>
                    <li>Sobre</li>
                    <li>Serviços</li>
                    <li>Projetos</li>
                    <li>Contatos</li>
                </ul>
            </NavigationMenu>
        </Container>
    );
}

export default Header;