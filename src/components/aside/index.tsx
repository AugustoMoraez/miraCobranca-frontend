import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, ToggleButton, Menu, MenuItem, MenuText, IconWrapper, Content } from './style.ts';
import { TiThMenu } from 'react-icons/ti';
import { AsideData } from './data.tsx';


export const Aside = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <Content>

            <ToggleButton $isOpen={isOpen} onClick={toggleMenu}>
                <TiThMenu size={24} />
            </ToggleButton>

            <Container $isOpen={isOpen}>
                <Menu>
                    {
                        AsideData.map((item,index) => (
                            <MenuItem key={index}>
                                <NavLink to={item.link} key={index}>
                                    <IconWrapper>{item.icon}</IconWrapper>
                                    {isOpen && <MenuText>{item.MenuText}</MenuText>}
                                </NavLink>
                            </MenuItem>
                        ))
                    }
                </Menu>


            </Container>
        </Content>
    );
};
