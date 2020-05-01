import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';


export const fetchdata = async (country)=> {

    let changeableUrl = url;

    if(country){
        changeableUrl = `${url}/countries/${country}`;
    }
    try{
        const { data : { confirmed , recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

        

        return { confirmed, recovered, deaths, lastUpdate };
        
    } catch (error) {
        console.log(error);

    }
    
}


export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get('https://covid19.mathdro.id/api/daily');

        const modifedData = data.map((dailyData) => ({ 
            confirmed : dailyData.confirmed.total,
            deaths : dailyData.deaths.total,
            date : dailyData.reportDate,

        }));

        return modifedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
          const { data : { countries }} = await axios.get('https://covid19.mathdro.id/api/countries');
          
          return countries.map((country) => country.name );
        //   console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}



// const fetchDailyStateData = async () => {
//     try {
//         const { data } = await axios.get('https://cors-anywhere.herokuapp.com/https://api.covid19india.org/data.json');
//         console.log(data);        
//     } catch (error) {
        
//     }
// }


export const fetchDailyDataIndia = async () => {
    try {
        // const { data } = await axios.get('https://covid19.mathdro.id/api/daily');
    const { data : {cases_time_series} } = await axios.get('https://cors-anywhere.herokuapp.com/https://api.covid19india.org/data.json');
        

         const modifedData = cases_time_series.map((cases_time_series) => ({ 
             confirmed : cases_time_series.totalconfirmed,
             deaths : cases_time_series.totaldeceased,
             recovered : cases_time_series.totalrecovered,
             date : cases_time_series.date,

         }));

         

  return modifedData;
  
    } catch (error) {
         console.log(error);
    }
}



export const fetchStates = async () => {
    try {
          const { data : { statewise }} = await axios.get('https://cors-anywhere.herokuapp.com/https://api.covid19india.org/data.json');
          
          return statewise.map((state) => state.state );
        //   console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}


// const url1 = 'https://cors-anywhere.herokuapp.com/https://api.covid19india.org/data.json';


// export const fetchdataStatWise = async (state)=> {

//     let changeableUrl1 = url1;

//     if(state){
//         changeableUrl1 = `https://cors-anywhere.herokuapp.com/https://api.covid19india.org/data.json`;
//     }
//     try{
//         const { data : { statewise } } = await axios.get(changeableUrl1);

//         if (state == statewise){

//             const modifedData = statewise.map((statewise) => ({ 

        
//                 confirmed : statewise.confirmed,
//                 deaths : statewise.deaths,
//                 recovered : statewise.recovered,
    
//             }));

//         }

        

//          return { modifedData };
        
//     } catch (error) {
//         console.log(error);

//     }
    
// }

export const fetchDailyDataIndiaState = async () => {
    try {
        // const { data } = await axios.get('https://covid19.mathdro.id/api/daily');
    const { data : {statewise} } = await axios.get('https://cors-anywhere.herokuapp.com/https://api.covid19india.org/data.json');
        

         const modifedData = statewise.map((statewise) => ({ 
             confirmed : statewise.confirmed,
             active : statewise.active,
             deaths : statewise.deaths,
             recovered : statewise.recovered,
             state : statewise.state,

         }));

         

  return modifedData;
  
    } catch (error) {
         console.log(error);
    }
}