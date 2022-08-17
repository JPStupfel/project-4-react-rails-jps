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


export default function ProjectChart({project}) {

const taskCount = Object.keys(project.tasks).length

const completedTaskCount = Object.keys(project.tasks.filter(e=> e.is_complete == false)).length



const data = [
    {
      name: "Stats",
      Tasks: taskCount,
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
        right: 30,
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
      <Bar yAxisId="left" dataKey="Tasks" fill="#8884d8" />
      
      <Bar yAxisId="right" dataKey="Completed_Tasks" fill="#800000" />
    </BarChart>
  );
}
