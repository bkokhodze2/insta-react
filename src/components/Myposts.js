import React,{useState} from "react"
import PropTypes, { array, object, string } from 'prop-types';
import Post from "./post";
const Myposts = () => {
    

    // const add=(value)=>{
    //     setStatepost([
    //         ...statepost,
    //         {   
    //             id:Date.now(),
    //             likes:"16",
    //             descr: "Hello! If you want to drink some delicious smoothies - just call me!",
    //             src:{value}
    //         }
    //     ])
    // }
    const getvalue =() =>{
        console.log()
    }
return(
    <div>
        <div>
            {/* <button onClick="">add</button> */}
        </div>
        {/* getvalue={value} */}
        
        <Post/>
    </div>
)}
Myposts.propTypes={
    statepost : array,
}
export default Myposts 