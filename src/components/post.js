import React,{useEffect, useState} from "react";
import Keanu from "./Keanu";
// import Moment from "react-moment";



const Post = (props) => {
    // console.log(props)
    const [statepost,setStatepost] = useState([
        {   id:Date.now(),
            src:"https://nighthelper.com/wp-content/uploads/2016/03/nature_waterfall_summer_lake_trees_90400_3840x2160.jpg",
            likes:"1116",
            descr: "call me!",
            date: "10/23/2020, 6:08:57 PM"
        }
    ])
    var [value,setvalue] = useState("");
    var [img,setimg] = useState("");

    const damateba = () =>{
        setStatepost([
            ...statepost,
            {   
                id:Date.now(),
                src:img,
                descr:value,
                likes: 0,
                date: new Date().toLocaleString()
            }
        ])
        
        setimg("");
        setvalue("");
        
        
        
    }
    
return(
    < > 
        <div className="add_photo">
            <input 
            placeholder="შეიყვანეთ სურათის აღწერა"
            type="text"
            onChange={e=> (setvalue(e.target.value) )}  value={value}
            ></input>

            <input 
            placeholder="ჩააგდეთ სურათის ლინკი"
            type="text"
            onChange={e=> (setimg(e.target.value) )}  img={img}
            ></input>

            <button onClick={damateba}>დამატება</button>
            
        </div>
        <div className="mypost">
            {statepost.map(item => 
                <div key={item.id} className="post">
                    <Keanu date={item.date}/>
                    
                    <img src={item.src} alt="alt"></img>
                    <div className="icon_div">
                        <img className="size_icon" src="https://icons-for-free.com/iconfiles/png/512/heart-131965017458786724.png" alt="hear_icon"></img>
                        <img className="size_icon" src="https://static.thenounproject.com/png/153178-200.png" alt="mess_icon"></img>
                        <img className="size_icon" src="https://www.clipartkey.com/mpngs/m/21-219017_instagram-paper-airplane-icon.png" alt="air_icon"></img>
                    </div>
                    <div className="likes"> {item.likes} likes</div>
                    <div className="post__descr">
                        {item.descr}
                    </div>
                    {/* <div>
                        {item.date}
                    </div> */}
                </div>
            ).reverse()
            }
        </div>
    </>
    )
}

export default Post;