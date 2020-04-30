import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {  Cards , Chart , CountryPicker } from '../components';

import styles from './Home.module.css';
import { fetchdata } from '../api';
import coronaimage from '../images/corona.png';


class Home extends React.Component {

    state = {
        data: {},  //Empty object unless populated
        country : '',
    }


    async componentDidMount(){
        const fetchedData  = await fetchdata();
         this.setState({ data: fetchedData });
 }
 
     handleCountryChange = async (country) => {
         const fetchedData  = await fetchdata(country);
         this.setState({ data: fetchedData , country : country });
 
 }

        render(){
    const { data , country} = this.state;
    return (
        
        <div className = { styles.container }>
           <img className = { styles.image } src={coronaimage} alt = "COVID-19" />
             
                
             <Cards data = {data} country = {country}/>

             <hr/>
             <CountryPicker handleCountryChange = {this.handleCountryChange} />
             
             <Chart className   data ={data} country = {country} />
             
    
        </div>
    );
};

 }



    

export default Home;