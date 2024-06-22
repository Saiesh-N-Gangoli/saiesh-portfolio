import React from 'react'
import SkillsChart from "./SkillsChart.json";
import { Doughnut } from "react-chartjs-2";
import "./Skills.css"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

const DoughnutChart = () => {
ChartJS.register(ArcElement, Tooltip, Legend);
  return (
    <div>
       <Doughnut className="second-container-graph"
              data=
              {{
                labels: SkillsChart.map((data) => data.label),
                datasets: [
                  {
                    label: "Technical Skills",
                    data: SkillsChart.map((data) => data.value),
                    backgroundColor: [
                      "rgb(102, 252, 241)",
                      "rgb(58, 190, 249)",
                      "rgb(167, 230, 255)",
                      "rgb(252, 236, 82)",
                      "rgb(202, 244, 255)",
                      "rgba(255, 159, 64, 0.2)",
                      "rgb(128, 179, 255)",
                    ],
                    borderRadius: 0,
                    borderWidth: 0,
                    offset: 5
                  },
                ],
              }} options={{
                cutout: '85%',
                plugins:{
                  legend:{
                    display: false
                  },
                },
              }}/>
    </div>
  )
}

export default DoughnutChart
