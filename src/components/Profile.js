import React from 'react';
import User from "./User";
import Palette from "./Palette";

const Profile = () => {
    var state = {
        name:"keanu",
        surname:"reevessss",
        src:"https://i2.wp.com/www.intelligentliving.co/wp-content/uploads/2019/09/Keanu-Reeves-1.jpg?fit=2100%2C1200&ssl=1",
        alt:"man"    
    }
    
    const{name,surname,src,alt} = state ;
    return(
        <div className="container profile">
            <User src={src}
                alt={alt} 
                name={name}
                surname={surname}
                />
                
            <Palette/>
        </div>
    )
}

export default Profile ;