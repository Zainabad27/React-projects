import React from "react";
import { useParams } from "react-router-dom";

export default function Params(){
    const {id}=useParams();
    return (
        <>
        <div className="w-full h-full bg-green-900 text-white rounded-4xl border-b-lime-50 bg-blur-lg p-50 m-6">
            <div>
                <h1> This is the parameter of URL: {id} </h1>
            </div>
        </div>
       
        </>
    )

}