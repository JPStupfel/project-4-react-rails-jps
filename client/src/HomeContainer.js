import React, {useState, useEffect} from 'react';
import HomeChart from './HomeStats';
import HomeInfoCard from './HomeInfoCard';

export default function HomeContainer({teamList, projectList}){
    return(
        <div>
            <h1>Welcome to Projectum!</h1>
            <span  style={{'display':'flex'}}>
                <HomeChart 
                projectList={projectList} 
                teamList={teamList}/>
                <HomeInfoCard  
                projectList={projectList} 
                teamList={teamList} />
            </span>
        </div>
    )
}