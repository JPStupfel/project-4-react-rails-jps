// import "./styles.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


export default function UserChart({user}) {

 const taskCount = Object.keys(user.tasks).length

 const completedTaskCount = Object.keys(user.tasks.filter(e=> e.is_complete == false)).length

 const projectCount = Object.keys(user.projects).length

 console.log(user)

const data = [
    {
      name: "Stats",
      Tasks: taskCount,
      Projects: projectCount,

      Completed_Tasks: completedTaskCount
    //   Active:  Object.keys(teamList.filter(e=>Object.keys(e.tasks).length >=1)).length,
      
    }
  ];
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 20,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
      <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
      <Tooltip />
      <Legend />
      <Bar yAxisId="left" dataKey="Projects" fill="#8884d8" />
      <Bar yAxisId="right" dataKey="Tasks" fill="#82ca9d" />
      <Bar yAxisId="right" dataKey="Completed_Tasks" fill="#800000" />
    </BarChart>
  );
}
