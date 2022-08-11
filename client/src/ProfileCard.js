import React from "react";
import UserChart from "./UserChart";

export default function ProfileCard({user}){
    console.log(user)
    return(
        <span>
            <img src={user.image} />
            <div className="bio-box">
                <p>Bio: {user.bio}</p>
                <p>Age: {user.age}</p>
           </div>
           <div>
            <UserChart/>
            <>Project List will go below</>
           </div>

        </span>
    )
}