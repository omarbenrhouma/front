import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData,text}) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center",color:"white",marginLeft:80 }}>Pie Chart</h2>
      <Pie
        data={chartData}
        style={{height:400,width:500,marginLeft:80}}
        options={{
          plugins: {
            title: {
              display: true,
              text: text
            }
          }
        }}
      />
    </div>
  );
}
export default PieChart;