import React, {useState, useEffect} from 'react';
import HomeChart from './HomeStats';

export default function HomeContainer({teamList}){
    return(
        <div>
            <HomeChart teamList={teamList}/>
        </div>
    )
}