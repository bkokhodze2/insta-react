import React,{uses} from 'react';

const Yuti = (props) =>{
    // console.log(props);
    // const{name,surname,id} = props.stateChat[0];
    return(
        
        <div>
            {props.stateChat.map(item => 
            
                <div key={item.id}>
                    <p>saxeli {item.name}</p>
                    <p>gvari: {item.surname}</p>
                    <img src={item.src}></img>
                    
                </div>
            
            )}
        </div>
    )
}
export default Yuti;