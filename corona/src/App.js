import React from 'react';
import { Cards , Chart , CountryPicker} from './components';
import styles from './App.module.css';
import { fetchdata } from './api';
import coronaimage from './images/corona.png';

class App extends React.Component{

    state = {
        data: {},  //Empty object unless populated
        country : '',
    }

    //Request to fetch data
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
        return(
            <div className = {styles.container} >
                <img className = { styles.image } src={coronaimage} alt = "COVID-19" />
                
                <Cards data = {data}/>
                <CountryPicker handleCountryChange = {this.handleCountryChange} />
                <Chart data ={data} country = {country} />
                
            </div>
        )
    }
}

export default App;