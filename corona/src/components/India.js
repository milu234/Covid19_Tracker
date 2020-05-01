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