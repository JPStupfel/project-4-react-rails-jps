import React from "react";
import UserChart from "./UserChart";
import UserShowProjectContainer from "./UserShowProjectContainer";
import UserShowTaskCard from "./UserShowTaskCard";

export default function ProfileCard({user}){
    const tasks = user.tasks.map(e=><UserShowTaskCard task={e} key={e.id}/>)

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
           <h1>All tasks to complete!</h1>
            {tasks}
        </span>
    )
}