import React,  {useState , useEffect} from 'react';
import { fetchDailyDataIndiaState } from '../../api';
import { Bar } from 'react-chartjs-2';
import styles from './BarChart.module.css';

const Chart = () => {

    // var data1 = confirmed.value
    
    // var data2 = recovered.value;
    
    // var y = data1 - data2;
     

    const [dailyData, setDailyData] = useState([]);


    useEffect(() => {
        const fetchAPI = async () =>{
            setDailyData(await fetchDailyDataIndiaState());
        }

        

        fetchAPI();
    },[]);

    
    const BarChart = (
        dailyData.length ?(
        <Bar
        
            data = {{
                labels: dailyData.map(({ state }) => state),
                datasets : [{
                    data : dailyData.map(({ confirmed  }) => confirmed ),
                    label : 'Infected',
                    
                    backgroundColor : 'rgba(3, 140, 252,0.5)',
                    fill : false,
                } , 


                {
                    data : dailyData.map(({ active }) => active),
                    label : 'Active',
                    
                    backgroundColor: 'rgba(242, 234, 0, 0.5)', 
                    fill : false,
                },
            
            


                {
                    data : dailyData.map(({ recovered }) => recovered),
                    label : 'Recovered',
                    
                    backgroundColor: 'rgba(0, 255, 0, 0.5)', //'rgba(255, 0, 0, 0.5)','rgba(242, 234, 0, 0.5)',
                    fill : false,
                },
            


                {
                    data : dailyData.map(({ deaths }) => deaths),
                    label : 'Deaths',
                    
                    backgroundColor: 'rgba(255,0,0,0.5)', 
                    fill : false,

                },
            
            ],


                


            }}

            width = {550}
            height = {550}
            
            options = {{
                // responsive : true,
                maintainAspectRatio:false,
                legend : { display : true },
                title : { display : true, text : `Current Statistics in INDIA StateWise` },
            }}
            
            />
        ) : null
    );


    



    return (
        <div className = { styles.container }>
            {/* <article className = "canvas-container"> */}
            { BarChart }

            {/* </article> */}
        </div>
    )
}

export default Chart;