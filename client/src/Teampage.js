import React, {useEffect, useState} from "react";
import TeamCardContainer from "./TeamCardContainer";

export default function Teampage(){

    const [teamList, setTeamList] = useState([])

    //fetch users
    useEffect(
        ()=>{
            fetch('/users').then(r=>r.json()).then(d=>setTeamList(d))
        },[]
    )



return(
<>
    <>Intro Will Go here</>
    <TeamCardContainer teamList={teamList}/>
</>
)
}