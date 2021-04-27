import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Header } from 'semantic-ui-react';

const menuItems = [
    {
        name: 'albums',
        position: null
    },
    {
        name: 'photos',
        position: null
    }
];

const Nav = () => {
    const renderMenuItems = (item: any) => {
        return (
            <Menu.Item
                position={item.position}
                key={item.name}
                name={item.name}
                as={NavLink}
                to={`/${item.name}`}
            />
        );
    };

    return (
        <Menu tabular>
            <Menu.Item>
                <Header as='h3' icon='camera retro' floated='right' />
            </Menu.Item>
            {menuItems.map(item => renderMenuItems(item))}
        </Menu>
    );
};

export default Nav;