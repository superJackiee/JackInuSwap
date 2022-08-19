
import React,{useState} from 'react';
import ReactApexChart from "react-apexcharts";
import './chart.css';

const PieChart = () => {
    
    const [state,SetState] = useState<any>({
      options: {
        colors: ['#6C86D8', '#FE7C72', '#F9C87E', '#8ADCAB', '#60566D', '#9F84CD'],
        labels: ["30% Play 2 Earn gaming/ yield farming reward", "10% Presale", "25% Development", "7% Marketing","8% Team","%20 liquidity"],
        dataLabels: { enabled: false},
        theme: {
          monochrome: {
            enabled: false
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: "120%",
                animations: {
                  enabled: true,
                  easing: 'easeinout',
                  speed: 800,
                  animateGradually: {
                      enabled: true,
                      delay: 150
                  },
                  dynamicAnimation: {
                      enabled: true,
                      speed: 350
                  }
              }
              },
              legend: {
                show: true,
                horizontalAlign: 'center',
                position: 'bottom'
              },
              
            }
          },

          {
            breakpoint: 768,
            options: {
              chart: {
                width: "100%",
                animations: {
                  enabled: true,
                  easing: 'easeinout',
                  speed: 800,
                  animateGradually: {
                      enabled: true,
                      delay: 150
                  },
                  dynamicAnimation: {
                      enabled: true,
                      speed: 350
                  }
              }
              },
              legend: {
                show: true,
                horizontalAlign: 'center',
                position: 'bottom'
              },
              
            }
          },
          {
            breakpoint: 450,
            options: {
              chart: {
                width: "100%",
                animations: {
                  enabled: true,
                  easing: 'easeinout',
                  speed: 800,
                  animateGradually: {
                      enabled: true,
                      delay: 150
                  },
                  dynamicAnimation: {
                      enabled: true,
                      speed: 350
                  }
              }
              },
              legend: {
                show: true,
                
                position: 'bottom'
              },
              
            }
          },

        ],
        chart: {
          events: {
            dataPointSelection: (event, chartContext, config) => {
              console.log(config.w.config.labels[config.dataPointIndex]);
            }
          }
        },
        
      },
      series: [40, 30, 20, 10, 5, 10]
    });

    return (
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="donut"
          width="750"
          verticalAlign="center"

        />
      </div>
    );
}

export default PieChart;