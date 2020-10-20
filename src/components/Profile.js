import React from 'react';
import User from "./User";
import Palette from "./Palette";

const Profile = () => {
    return(
        <div className="container profile">
            <User src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
                alt="man" 
                name="keanu reeves"/>
            <Palette/>
        </div>
    )
}

export default Profile ;