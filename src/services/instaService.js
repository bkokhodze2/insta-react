export default class InstaService {
    constructor(){
        this._apiBase ="http://localhost:3000";
    }

    getResource = async (url) =>{
        const res = await fetch(`${this._apiBase}${url}`);
        
        if(!res.ok){
            throw new Error(`could not fetch ${url};recieved ${res.status}`);
        }
        return await res.json();
    
        
        
    }
    getAllPosts = async () =>{
        const res = await this.getResource('/posts/');
        return res;
        
    };
    

    getAllPhotos = async () =>{
        const res = await this.getResource('/myPhotos/');
        return res.map(this._transformPosts);
        
    }
    _transformPosts = (photo) =>{
        return{
            src: photo.src,
            alt: photo.alt,
            id: photo.id
        }
        
    }
}