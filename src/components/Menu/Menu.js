import React, {Component}  from 'react';
import {Route, Link} from 'react-router-dom';
const menus = [
    {
        name:"Home",
        to: '/',
        exact: true
    },
    {
        name:"Product Management",
        to: '/products',
        exact: false
    },
    {
        name:"My Account",
        to: '/user',
        exact: false
    },
];
const MenuLink = ({label,to,exact}) => {
    return (
        <Route
            path={to}
            exact={exact}
            children={
                ({match})=> {
                    var active = match ? 'nav-item active': 'nav-item';
                    return (
                        <li className={active} >
                            <Link className="nav-link" to={to} >{label}</Link>
                        </li>
                    );
                }
            }

        />
    )
}

class Menu extends Component{
    render() {
        return (
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav bd-navbar-nav flex-row">
                    {this.showMenu(menus)}
                </ul>
            </div>
        );
    }
    showMenu = (menus)=> {
        var result=null;
        if(menus.length > 0) {
            result = menus.map((menu,index)=> {
                return(
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        exact={menu.exact}
                    />
                );
            });
        }
        return result;
    }
}
export default Menu;
