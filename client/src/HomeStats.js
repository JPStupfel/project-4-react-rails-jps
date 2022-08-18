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


export default function HomeChart({teamList, projectList}) {


const completedProjectCount = Object.keys(projectList.filter(e=> e.tasksRemaining['remaining'] == 0)).length

const data = [
    {
      name: "Stats",
      Users: Object.keys(teamList).length,
      Projects: Object.keys(projectList).length,
      Completed_Projects: completedProjectCount
      
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
      <Bar yAxisId="left" dataKey="Users" fill="#8884d8" />
      <Bar yAxisId="right" dataKey="Projects" fill="#82ca9d" />
      <Bar yAxisId="right" dataKey="Completed_Projects" fill="#800000" />
    </BarChart>
  );
}
