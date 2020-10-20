import React,{Component} from "react"
import User from "./User";

export default class Post extends Component{
    render() {
        return(
            <div className="post">
                <User src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
                alt="man" 
                name="scot"
                min/>
                
                <img src={this.props.src} 
                    alt={this.props.alt}></img>
                <div className="post__name">
                    some account</div>
                <div className="post__descr">
                    lorem ipsum dolor

                </div>
            </div>
        )
    }
}