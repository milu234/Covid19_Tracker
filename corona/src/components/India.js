import React from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {  BarChart } from "../components";
import { PieChart } from '../components';
import styles from './India.module.css';

// import { container } from '@material-ui/core';


class India extends React.Component  {

render(){

    return (
        <div className = { styles.container }>
            <hr/>
           <PieChart  />
           <hr />
         
            <BarChart  />
    
        </div>
    )
};

}


export default India;