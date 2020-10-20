import React,{Component} from "react"
import InstaService from"../services/instaService";
// import User from "./User";
import  ErrorMassage from "./Error";
import Loading from './Loading';


// export default class Users extends Component{
//     InstaService = new InstaService();
//     state = {  
//         users: [],
//         error: false,
//         loading:true
//     }
//     componentDidMount() {
//         this.updateUser();
//     }
//     updateUser(){
//         this.InstaService.getAllUser()
//         .then(this.onPostsLoaded)
//         .catch(this.onError);
//     }

//     onPostsLoaded = (users) =>{
//         this.setState({
//             users,
//             error:false,
//             loading:false
//         });
//     }
//     onError = (err) =>{
//         this.setState({
//             error: true
//         })
//     }


//     renderItems(arr){
//         return arr.map(item =>{
//             const {name,altname,photo,src,alt,descr,id,likes} = item;
//             return (
//             <div key={id} className="post">
//                 <img src={src}>src</img>
//             </div>
//             )
//         });
//     }

//     render() {
//         const {error,users,loading } = this.state;

//         if(error){
//             return <ErrorMassage posts/>
//         }
//         if(loading){
//             return <Loading/>
//         }

//         const items = this.renderItems(users);
        
//         return(
//             <div className="left">
//                 {items}
//             </div>
//         )
//     }
// }





const User = (props) => {
    const {min, src, alt, name } = props;
    return(
        <a href="#" 
        className={min ? "user min": "user"}>
            <img src={src} alt={alt}></img>
            <div>{name}</div>
        </a>
    )
}
export default User ;




