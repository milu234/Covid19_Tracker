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
           



           <div className = {styles.container1} >
           <iframe target = "_blank" style={{width: 120 +  'px'},{height: 240 +  'px'}} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_br_asin_til&ad_type=product_link&tracking_id=milnahazra234-21&marketplace=amazon&region=IN&placement=B07HGH8ML7&asins=B07HGH8ML7&linkId=c44808253353b0e6fe58562cbd8750ca&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
    </iframe>

    <iframe style={{width: 120 +  'px'},{height: 240 +  'px'}} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=milnahazra234-21&marketplace=amazon&region=IN&placement=B088RNK95K&asins=B088RNK95K&linkId=bd9ae8d72c679d0954f86b56571d8078&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
    </iframe>

    <iframe style={{width: 120 +  'px'},{height: 240 +  'px'}} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=milnahazra234-21&marketplace=amazon&region=IN&placement=B088KJWGB5&asins=B088KJWGB5&linkId=17b279bbf618bbd99a7fd8f96d7a3cb0&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
    </iframe>

    

    
    



    </div>


    

           <br>
             </br>
         

             

           <text><b>Global and Country Wise Cases of Corona Virus</b></text><br>
             </br>
             <text><i>(For a Particlar select a  Country from below)</i></text>
             
             <br></br>
             <br></br>
             <Cards data = {data} country = {country}/>

             <hr/>
             
             <CountryPicker handleCountryChange = {this.handleCountryChange} />


             <br>
             </br>
         

             

           <text><b>Daily Statistics of People Getting Infected</b></text><br>
             </br>
             
             <Chart className   data ={data} country = {country} />
             
    
        </div>
    );
};

 }



    

export default Home;