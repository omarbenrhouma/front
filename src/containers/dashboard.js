import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState, useEffect } from "react";
import PieChart from "../components/Piechart";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale);

export default function Dashboard() {
  const [chartDatacateg, setChartDatacateg] = useState(null);
  const [ChartDatasocateg, setChartDatasocateg] = useState(null);

  const [highrisk,setHighrisk]=useState(null);
  const [meduimris,setMeduimris]=useState(null)
  const [risquecount,setRisquecount]=useState(null)
  const [lowris,setlowris]=useState(null)

  const data = useSelector((state) => state.data);
  useEffect(() => {
    if (data) {
    const categories = {};  // Iterate through the data and count the categories and high-risk levels
    data.forEach((entry) => {
      const category = entry["Catégorie de contrôle de sécurité"];
      const riskLevel = entry["Risque"].toLowerCase();
    
      if (!categories[category]) {
        categories[category] = {
          total: 0,
          meduimRisk: 0,
        };
      }
    
      categories[category].total++;
      if (riskLevel === "medium risk") {
        categories[category].meduimRisk++;
      }
    });
    
    const chartData = {
      labels: Object.keys(categories),
      datasets: [
        {
          label: "Meduim Risk Count",
          data: Object.values(categories).map((category) => category.meduimRisk),
          backgroundColor: [
            "#4B0082",
            "#5E3090",
            "#714B9D",
            "#8466AB",
            "#9781B9",
            "#AA9DC7",
            "#BDB8D4",
            "#D0D4E2",
            "#E3EFF0",
            "#F6FAFD",
            "#00FFFF"
            
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    };
    
    setMeduimris(chartData);
    }
    }, [data]);
    useEffect(() => {
      if (data) {
      const categories = {};  // Iterate through the data and count the categories and high-risk levels
      data.forEach((entry) => {
        const category = entry["Catégorie de contrôle de sécurité"];
        const riskLevel = entry["Risque"].toLowerCase();
      
        if (!categories[category]) {
          categories[category] = {
            total: 0,
            meduimRisk: 0,
          };
        }
      
        categories[category].total++;
        if (riskLevel === "low risk") {
          categories[category].meduimRisk++;
        }
      });
      
      const chartData = {
        labels: Object.keys(categories),
        datasets: [
          {
            label: "Low Risk Count",
            data: Object.values(categories).map((category) => category.meduimRisk),
            backgroundColor: [
              "#4B0082",
              "#624B89",
              "#7A5890",
              "#916897",
              "#A8779E",
              "#C08DA6",
              "#D8A3AE",
              "#EFB9B6",
              "#FFCFBF",
              "#FFE6C7",
              "#FFFFFF"
              
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      };
      
      setlowris(chartData);
      }
      }, [data]);
    useEffect(() => {
      if (data) {
        const categories = {}; // object to hold the category counts
  
        // iterate through the data and count the categories
        data.forEach((entry) => {
          const category = entry["Sous-catégorie de contrôle de sécurité"];
          if (categories[category]) {
            categories[category]++;
          } else {
            categories[category] = 1;
          }
        });
  
        const chartData = {
          labels: Object.keys(categories),
          datasets: [
            {
              label: "Actif",
              data: Object.values(categories),
              backgroundColor: [
                "#FFFFFF",
                "#E6F0F7",
                "#CCE1F3",
                "#B3D3EF",
                "#99C4EB",
                "#80B6E7",
                "#6697E3",
                "#4D89DF",
                "#336BD8",
                "#1A4DB4",
                "#003F5C"
                
                

              ],
              borderColor: "black",
              borderWidth: 2,
            },
          ],
        };
  
        setChartDatasocateg(chartData);
      }
    }, [data]);
  useEffect(() => {
    if (data) {
      const categories = {}; // object to hold the category counts

      // iterate through the data and count the categories
      data.forEach((entry) => {
        const category = entry["Catégorie de contrôle de sécurité"];
        if (categories[category]) {
          categories[category]++;
        } else {
          categories[category] = 1;
        }
      });

      const chartData = {
        labels: Object.keys(categories),
        datasets: [
          {
            label: "Actif",
            data: Object.values(categories),
            backgroundColor: [
              "#003f5c",
                              "#2f4b7c",
                              "#41668b",
                              "#547c9c",
                              "#6793ad",
                              "#7aa9be",
                              "#8dc0cf",
                              "#a0d6e0",
                              "#b3ecee",
                              "#c6f5ff",
                              "#d9fbff",
                              "#ecffff",
                              "#ffa600",
                              "#ffcd00",
                              "#ffec01",
                              "#f3ff3e",
                              "#c7ff6f",
                              "#92ff9f",
                              "#5affce",
                              "#00fffc"

            ]
            ,
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      };

      setChartDatacateg(chartData);
    }
  }, [data]);
  useEffect(() => {
    if (data) {
    const categories = {};  // Iterate through the data and count the categories and high-risk levels
    data.forEach((entry) => {
      const category = entry["Catégorie de contrôle de sécurité"];
      const riskLevel = entry["Risque"].toLowerCase();
    
      if (!categories[category]) {
        categories[category] = {
          total: 0,
          highRisk: 0,
        };
      }
    
      categories[category].total++;
      if (riskLevel === "high risk") {
        categories[category].highRisk++;
      }
    });
    
    const chartData = {
      labels: Object.keys(categories),
      datasets: [
        {
          label: "High Risk Count",
          data: Object.values(categories).map((category) => category.highRisk),
          backgroundColor: [
            "#003F5C",
            "#114C85",
            "#2264AE",
            "#337DD7",
            "#4495FF",
            "#55A7FF",
            "#66B8FF",
            "#77CAFF",
            "#88DCFF",
            "#99EEFF",
            "#AAFFFF"
                     
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    };
    
    setHighrisk(chartData);
    }
    }, [data]);

    useEffect(() => {
      if (data) {
        const riskLevels = {
          highRisk: 0,
          mediumRisk: 0,
          lowRisk: 0,
        };
    
        data.forEach((entry) => {
          const riskLevel = entry["Risque"].toLowerCase();
    
          if (riskLevel === "high risk") {
            riskLevels.highRisk++;
          } else if (riskLevel === "medium risk") {
            riskLevels.mediumRisk++;
          } else if (riskLevel === "low risk") {
            riskLevels.lowRisk++;
          }
        });
    
        const chartData = {
          labels: ["High Risk", "Medium Risk", "Low Risk"],
          datasets: [
            {
              label: "Risk Count",
              data: [
                riskLevels.highRisk,
                riskLevels.mediumRisk,
                riskLevels.lowRisk,
              ],
              backgroundColor: ["#A9A9A9", "#DDDDDD", "#0674C4"],
              borderColor: "black",
              borderWidth: 2,
            },
          ],
        };
    
        setRisquecount(chartData);
      }
    }, [data]);
  return (
<div className="listbody" style={{ display: 'block', justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
  <h1 className='titrepage' style={{ marginBottom: 100, textAlign: 'center', fontSize: 50 }}>Dashboard</h1>
  {chartDatacateg ? (
    <div>
      <div style={{ display: "flex", minHeight: 400, width: 800, marginBottom: 30 }}>
        <PieChart chartData={chartDatacateg} text={"Nombre des actif dans chaque category"} />
        <PieChart chartData={ChartDatasocateg} text={"Nombre des actif dans chaque sous-category"} />
      </div>
      <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "column", width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center",marginBottom: 30 }}>
          <Bar
            data={risquecount}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Nombre des Risque dans Table"
                }
              }
            }}
            style={{ height: 500, width: 500 }}
          />
        </div>
      </div>
      <div style={{ display: "flex", minHeight: 400, width: 600,gap:10 }}>
        <Bar
          data={meduimris}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Nombre des Meduim risque dans chaque category"
              }
            }
          }}
          style={{ height: 500, width: 500 }}
        />
        <Bar
          data={highrisk}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Nombre des High risque dans chaque category"
              }
            }
          }}
          style={{ height: 500, width: 500 }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "column", width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center",marginBottom: 30 }}>
          <Bar
            data={lowris}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Nombre des Low  risque dans chaque category"
                }
              }
            }}
            style={{ height: 500, width: 500 }}
          />
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading Dashboard...</h1>
  )}
</div>



  );
}
