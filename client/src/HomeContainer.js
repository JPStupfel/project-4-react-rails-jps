import React, {useState, useEffect} from 'react';
import HomeChart from './HomeStats';

export default function HomeContainer({teamList, projectList}){
    return(
        <div>
            <HomeChart projectList={projectList} teamList={teamList}/>
        </div>
    )
}