import React ,{useState,useEffect} from 'react';
import User from "./User";
import Palette from "./Palette";
import Yuti from "./yuti";
import PropTypes, { object, string } from 'prop-types';
const Profile = () => {
    var state = {
        name:"keanu",
        surname:"reevessss",
        src:"https://i2.wp.com/www.intelligentliving.co/wp-content/uploads/2019/09/Keanu-Reeves-1.jpg?fit=2100%2C1200&ssl=1",
        alt:"man"    
    }
    const{name,surname,src,alt} = state ;
    var[show,sethow] = useState(false);
    var[hop,sethop] = useState(false);
    var[namee,setnamee] = useState ("");
    const [stateChat,setStateChat] = useState([
            {id:1,name:"keanu",surname:"reeves",src:"https://icons-for-free.com/iconfiles/png/512/heart-131965017458786724.png"},
            {id:2,name:"bakuri",surname:"kokhodze",src:"https://icons-for-free.com/iconfiles/png/512/heart-131965017458786724.png"},
        ])
    
    useEffect(() => {
        // add ()
    },[]);
    

    const open = ()=>{
        setnamee("mesame"); 
        sethow(false);
        sethop(true);
    }

    const close = ()=>{
        sethow(true);
        sethop(false);
    }
    
return(
    <div >
        {show?<button onClick={open} >close</button>
            :<button onClick={close}>open</button>}
        
        <User src={src}
            alt={alt} 
            surname={surname}
            />    
        {show?<Yuti stateChat={stateChat}/>:""}
        
        <Palette/>
    </div>
    )
    
}
Profile.propTypes = {
    stateChat: object,
    src :string,
    surname : string,
    alt :string

}
export default Profile ;