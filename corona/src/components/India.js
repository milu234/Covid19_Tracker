import React from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {  BarChart } from "../components";
import { PieChart } from '../components';
import styles from './India.module.css';
import { Table } from '../components'

// import { container } from '@material-ui/core';


class India extends React.Component  {

render(){

    return (
        <div className = { styles.container }>
            <br></br>
            <text><b>Daily Statistics Of India</b></text><br></br>
            <text><i>Click the boxes above the graph for a particular type of case</i></text>
           <PieChart  />
           <br></br>
           <hr />

           <div className = {styles.container1} >
           <iframe style={{width: 120 +  'px'},{height: 240 +  'px'}}  marginWidth="0" marginHeight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=milnahazra234-21&marketplace=amazon&region=IN&placement=B08FZQ7ZVM&asins=B08FZQ7ZVM&linkId=244147396d56c161a552c1bfa6e962b2&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff">
    </iframe>


    <iframe style={{width: 120 +  'px'},{height: 240 +  'px'}} marginWidth="0" marginHeight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=milnahazra234-21&marketplace=amazon&region=IN&placement=B071Z8M4KX&asins=B071Z8M4KX&linkId=1fba33b2e9f6f488325691993507ff8d&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff">
    </iframe>

    <iframe style={{width: 120 +  'px'},{height: 240 +  'px'}} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=milnahazra234-21&marketplace=amazon&region=IN&placement=178633089X&asins=178633089X&linkId=afcd60284ae98271f682c30ea301c437&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff">
    </iframe>

    
    



    </div>


           <br></br>
           <text><b>StateWise Cases Distribution in India</b></text>
           <br></br>
           <br></br>
         < Table />

         <br></br>
         <br></br>
         <hr/>
         
         <br></br>
         <text><b>Graphical View Of Cases in India</b></text><br></br>
         <text><i>Click the boxes above the graph for a particular type of case</i></text>
         <br></br>

            <BarChart  />
    
        </div>
    )
};

}


export default India;