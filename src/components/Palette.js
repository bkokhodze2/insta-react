import React,{Component} from "react";
import InstaService from "../services/instaService";
import ErrorMasage from "./Error" ;
import Loading from "./Loading"

export default class Palette extends Component {
    InstaService = new InstaService();
    state = {
        error: false,
        photos: []
        // loading:true
    }
    
    componentDidMount(){
        this.updatePhotos();
        
    }

    updatePhotos (){
        this.InstaService.getAllPhotos()
            .then(this.onPhotosLoaded)
            .catch(this.onError)
    }

    onError = () =>{
        this.setState({
            error: true
        })
    }

    onPhotosLoaded = (photos) =>{
        this.setState({
            error: false,
            photos //photos:photos//
            // loading :false
        })
    }
    renderItems(arr){
        return arr.map(item => {
            const {src,alt,id} = item;
            return(
                <img key={id} src={src} alt={alt}></img>
            )
        });
    }
    
    render(){
        const {error,photos,loading} = this.state;
        if(error){
            return <ErrorMasage/>
        }
        // if(loading){
        //     return <Loading/>
        // }
        const items = this.renderItems(photos);
        return(
            <div className="palette">
                {items}
            </div>
        )
    }
}