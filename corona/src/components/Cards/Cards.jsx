import React from 'react';
import { Card , CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';



const Cards = ( { data : {confirmed , recovered, deaths, lastUpdate}} ) => {

    if(!confirmed){
        return 'Loading.....'
    }
    

    var data1 = confirmed['value'];
    console.log(typeof data1);
    var data2 = parseInt(2766611);
    console.log(typeof data2);
    var y = data1 - data2;
    var d = '24/04/2020';


    return (
        <div className = {styles.container}>
            <Grid container spacing = {3} justify = "center">

                
                <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card, styles.infected)}>
                    <CardContent>
                    <Typography color = "textPrimary" gutterBottom>Infected</Typography>
                    <Typography variant = "h5"> 
                    <CountUp start = {0} end = { confirmed.value } duration = {2.5} separator = "," />
                    </Typography>
                        <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant = "body2">Number of Active Cases from COVID-19</Typography>
                    {/* <Typography color = "textSecondary">Increse in Cases since {d}</Typography>
                    <Typography variant = "body2">{y}</Typography> */}
                    </CardContent>
                </Grid>

                <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card, styles.recovered)}>
                    <CardContent>
                    <Typography color = "textPrimary" gutterBottom>Recovered</Typography>
                    <Typography variant = "h5"><CountUp start = {0} end = { recovered.value } duration = {2.5} separator = "," /></Typography>
                    <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant = "body2">Number of Recovered Cases from COVID-19</Typography>
                    </CardContent>
                </Grid>


                <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card, styles.deaths)}>
                    <CardContent>
                    <Typography color = "textPrimary" gutterBottom>Deaths</Typography>
                    <Typography variant = "h5"><CountUp start = {0} end = { deaths.value } duration = {2.5} separator = "," /></Typography>
                    <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant = "body2">Number of Death Cases from COVID-19</Typography>
                    </CardContent>
                </Grid>



            </Grid>
        </div>
    )
}

export default Cards;