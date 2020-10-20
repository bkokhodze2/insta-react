import React,{Component} from 'react';
import keanu from "./Keanu";
import InstaService from"../services/instaService";
import User from "./User";
import  ErrorMassage from "./Error";
import Loading from './Loading';
import Keanu from './Keanu';

export default class Users extends Component{
    
    InstaService = new InstaService();
    state = {  
        posts: [],
        error: false,
        loading:true
        
    }
    
    componentDidMount() {
        this.updateuser();
    }
    updateuser(){
        this.InstaService.getAllUser()
        .then(this.onPostsLoaded)
        .catch(this.onError);
    }

    onPostsLoaded = (posts) =>{
        this.setState({
            posts,
            error:false,
            loading:false
        });
        

    }

    onError = (err) =>{
        this.setState({
            error: true
        })
    }

    renderUser(arr){
        return arr.map(item =>{
            const {name,altname,photo,src,alt,descr,id,likes} =item;
            return (
                // <User src={photo}
                // alt={altname}       
                // name={name}
                // min/>
            <div key={id} className="user">
                
                
                <div className=" min">
                    <img src={photo}/>
                    <p>{name}</p>
                </div>
                
            </div>
            )
        });
    }

    render() {
        const {error,posts,loading } = this.state;

        if(error){
            return <ErrorMassage posts/>
        }
        if(loading){
            return <Loading/>
        }

        const items = this.renderUser(posts);
        
        return(
            <div className="left">
                <Keanu/>
                {items}
            </div>
        )
    }

}