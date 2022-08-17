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


export default function HomeChart({teamList}) {

const data = [
    {
      name: "Stats",
      Users: Object.keys(teamList).length,
    //   Active:  Object.keys(teamList.filter(e=>Object.keys(e.tasks).length >=1)).length,
      amt: 2400
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
      <Bar yAxisId="right" dataKey="Active" fill="#82ca9d" />
    </BarChart>
  );
}
