import React,  {useState , useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line,Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({ data : {confirmed , deaths, recovered}, country }) => {

    // var data1 = confirmed.value
    
    // var data2 = recovered.value;
    
    // var y = data1 - data2;
     

    const [dailyData, setDailyData] = useState([]);


    useEffect(() => {
        const fetchAPI = async () =>{
            setDailyData(await fetchDailyData());
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
                } , {
                    data : dailyData.map(({ deaths }) => deaths),
                    label : 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255,0,0,0.5)', 
                    fill : true,

                }],
            }}
            
            width = {550}
            height = {450}

            options = {{
                maintainAspectRatio : false
            }

            }
            
            
            />
        ) : null
    );


    const barChart = (
        confirmed 
        ?(

            <Bar
                
                data = {{
                   
                    labels: ['Infected', 'Recovered', 'Deaths','Active'],
                    datasets : [{
                        label : 'People',
                        backgroundColor : [
                            
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)',
                            'rgba(242, 234, 0, 0.5)',
                        ],
                        hoverBackgroundColor : [
                            
                            'rgba(0, 77, 153)',
                            'rgba(30, 102, 49)',
                            'rgba(255, 51, 51)',
                            'rgba(204, 153, 0)',
                        ],
                        data : [confirmed.value, recovered.value, deaths.value, confirmed.value-recovered.value],
                        
                    }]

                }}
                width  = {550}
                 height  = {450}   
                options = {{
                    maintainAspectRatio : false,
                    legend : { display : true },
                    title : { display : true, text : `Current Statistics in ${country}` },
                }}
            />
        ) : null
    )



    return (
        <div className = {styles.container} >
            { country ? barChart :  lineChart }
        </div>
    )
}

export default Chart;