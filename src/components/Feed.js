import React ,{useState,useEffect} from 'react';
import Keanu from './Keanu';
import Posts from "./Posts";
import Users from "./Users";

export default function Feed (){

    return(
        <div className="container feed">
            <Posts />
            <Users />
        </div>
    )
}