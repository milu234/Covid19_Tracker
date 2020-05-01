import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Navbar,Footer } from './components';
import { India,Home } from './components';
import styles from './App.module.css';
// import { fetchdata } from './api';

import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';


function App () {
    return(

        

        <Router>
            
                    
            <div className = {styles.container} >
        
                <Navbar />
                <Switch>
                    <Route path = '/' component= {Home} exact/> 
                    <Route path = '/India' component= {India} />
                </Switch>
                        
        
            <Footer />  
                    
        </div>
                    
        </Router>              
            
                );

}


export default App;