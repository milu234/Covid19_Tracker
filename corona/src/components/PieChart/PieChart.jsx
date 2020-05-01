import React,  {useState , useEffect} from 'react';
import { fetchDailyDataIndia } from '../../api';
import { Line } from 'react-chartjs-2';
// import styles from './PieChart.module.css';

const Chart = ({ data }) => {

    // var data1 = confirmed.value
    
    // var data2 = recovered.value;
    
    // var y = data1 - data2;
     

    const [dailyData, setDailyData] = useState([]);


    useEffect(() => {
        const fetchAPI = async () =>{
            setDailyData(await fetchDailyDataIndia());
        }

        

        fetchAPI();
    },[]);

    
    const lineChart = (
        dailyData.length ?(
        <Line
        
            data = {{
                labels: dailyData.map(({ date }) => date),
                datasets : [{
                    data : dailyData.map(({ confirmed }) => confirmed),
                    label : 'Infected',
                    borderColor: '#3333ff',
                    fill : true,

                    lineTension : 0.1,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#3333ff',
                } , 
                
                
                
                {
                    data : dailyData.map(({ recovered }) => recovered),
                    label : 'Recovered',
                    borderColor: 'green',
                    backgroundColor: 'rgba(0,255,0,0.5)', 
                    fill : true,

                },


                
                {
                    data : dailyData.map(({ deaths }) => deaths),
                    label : 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255,0,0,0.5)', 
                    fill : true,

                }
            
            
            ],
            }}
            width = {550}
            height = {550}
            options = {{
                maintainAspectRatio:false,
        
                legend : { display : true },
                title : { display : true, text : `Daily Statistics of India` },
            }}/>
        ) : null
    );


    



    return (
        <div >
            { lineChart }
        </div>
    )
}

export default Chart;