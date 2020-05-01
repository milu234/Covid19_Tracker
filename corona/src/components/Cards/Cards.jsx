import React from 'react';
import { Card , CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';




const Cards = ( { data : {confirmed , recovered, deaths, lastUpdate}, country} ) => {

    if(!confirmed){
        return 'Loading......3....2........1'
    }
    

    var data1 = confirmed['value'];
    
    var data2 = recovered['value'];
    
    var y = data1 - data2;
     


    return (
        <div className = {styles.container}>
            <Grid container spacing = {2} justify = "center">

                
                <Grid item component = {Card} xs = {12} md = {2} className = {cx(styles.card, styles.infected)}>
                    <CardContent>
                    <Typography color = "textPrimary" gutterBottom><b>Infected</b></Typography>
                    <Typography variant = "h5"> 
                    <CountUp start = {0} end = { confirmed.value } duration = {1} separator = "," />
                    </Typography>
                    <Typography color = "textPrimary">Last Updated at : </Typography>
                    <Typography color = "textSecondary" variant ="body2">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography color = "textSecondary" variant ="body2">{new Date(lastUpdate).toLocaleTimeString()}</Typography>
                    <Typography variant = "body2">Number of Infected Cases from COVID-19</Typography>
                    <Typography color = "textPrimary"> {country} </Typography>
                    {/* <Typography color = "textSecondary">Increse in Cases since {d}</Typography>
                    <Typography variant = "body2">{y}</Typography> */}
                    </CardContent>
                </Grid>

                <Grid item component = {Card} xs = {12} md = {2} className = {cx(styles.card, styles.recovered)}>
                    <CardContent>
                    <Typography color = "textPrimary" gutterBottom><b>Recovered</b></Typography>
                    <Typography variant = "h5"><CountUp start = {0} end = { recovered.value } duration = {1} separator = "," /></Typography>
                    <Typography color = "textPrimary">Last Updated at : </Typography>
                    <Typography color = "textSecondary" variant ="body2">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant ="body2">{new Date(lastUpdate).toLocaleTimeString()}</Typography>
                    <Typography variant = "body2">Number of Recovered Cases from COVID-19</Typography>
                    <Typography color = "textPrimary"> {country} </Typography>
                    </CardContent>
                </Grid>


                <Grid item component = {Card} xs = {12} md = {2} className = {cx(styles.card, styles.deaths)}>
                    <CardContent>
                    <Typography color = "textPrimary" gutterBottom><b>Deaths</b></Typography>
                    <Typography variant = "h5"><CountUp start = {0} end = { deaths.value } duration = {1} separator = "," /></Typography>
                    <Typography color = "textPrimary">Last Updated at : </Typography>
                    <Typography color = "textSecondary" variant ="body2">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography color = "textSecondary" variant ="body2">{new Date(lastUpdate).toLocaleTimeString()}</Typography>
                    <Typography variant = "body2">Number of Death Cases from COVID-19</Typography>
                    <Typography color = "textPrimary"> {country} </Typography>
                    </CardContent>
                </Grid>


                
                <Grid item component = {Card} xs = {12} md = {2} className = {cx(styles.card, styles.active)}>
                    <CardContent>
                    <Typography color = "textPrimary" gutterBottom><b>Active</b></Typography>
                    <Typography variant = "h5"><CountUp start = {0} end = { y } duration = {1} separator = "," /></Typography>
                    <Typography color = "textPrimary">Last Updated at : </Typography>
                    <Typography variant ="body2">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant ="body2">{new Date(lastUpdate).toLocaleTimeString()}</Typography>
                    <Typography variant = "body2">Number of Active Cases from COVID-19</Typography>
                    <Typography color = "textPrimary"> {country} </Typography>
                    </CardContent>
                </Grid>



            </Grid>
        </div>
    )
}

export default Cards;