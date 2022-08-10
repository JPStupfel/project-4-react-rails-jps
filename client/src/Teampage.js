import React, {useEffect, useState} from "react";
import TeamCardContainer from "./TeamCardContainer";

export default function Teampage(){

    const [teamList, setTeamList] = useState([])

    useEffect(
        ()=>{
            fetch('/users').then(r=>r.json()).then(d=>console.log(d))
        },[]
    )



return(
<>
    <>Intro Will Go here</>
    <TeamCardContainer/>
</>
)
}