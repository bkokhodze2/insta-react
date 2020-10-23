import React,{Component} from 'react';
import logo  from "../logo.png";
import {Link} from "react-router-dom";
export default class Header extends Component {
    render (){
        return(
            <header>
                <div className="container h-flex">
                    <div className="home_inst">
                    <Link to="/" className="logo">
                        <img src={logo} alt="logo"></img>
                    </Link>
                    <img className="insta_font" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNGrSc2O8dCd7oShnsgRAQrJEzNwe1hEm9Dw&usqp=CAU"></img>
                    </div>
                    <nav className="links">
                        <ul>
                            <li>
                                <Link to="/" className="menu__links">lenta</Link>
                            </li>
                            <li>
                                <Link to="/profile" className="menu__links">profile</Link>
                            </li>
                            <li>
                                <Link to="/MYPOSTS" className="menu__links">MY POSTS</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}