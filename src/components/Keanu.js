import React from "react"

const Keanu =(props) => {
    return(
        <>
        <div className="flex">
            <a href="#" 
            className="user">
                <img src="https://i2.wp.com/www.intelligentliving.co/wp-content/uploads/2019/09/Keanu-Reeves-1.jpg?fit=2100%2C1200&ssl=1" alt="icon_img"></img>
                <div>keanu</div>
                <div className="date"></div>
            </a>
            <div className="date">
                {props.date}
            </div>
            
            
        </div> 
        </>
    )
}


export default Keanu ;