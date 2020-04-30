import React, {useEffect, useState} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './StatePicker.module.css';

import { fetchStates } from '../../api';

const StatePicker = ({ handleStateChange }) => {

    const[fetchedStates, setFetchedStates] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedStates(await fetchStates() );

        } 

        fetchAPI();
    }, [setFetchedStates]);

    

    return (
        <FormControl className = {styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleStateChange(e.target.value) }>
                <option value = "">Select State</option>
                {fetchedStates.map((states, i) => <option key={i} value={states}>{states}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default StatePicker;