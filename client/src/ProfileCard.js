import React from "react";
import UserChart from "./UserChart";
import UserShowProjectContainer from "./UserShowProjectContainer";

export default function ProfileCard({user}){

    return(
        
        <span>
            <img src={user.image} />
            <div className="bio-box">
                <p>Bio: {user.bio}</p>
                <p>Age: {user.age}</p>
           </div>

           <div>
            <UserChart/>
           </div>
           <h1>All Projects I'm involved in!</h1>
           <UserShowProjectContainer projectList={user.projects}/>

        </span>
    )
}