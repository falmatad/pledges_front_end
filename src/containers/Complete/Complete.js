import React, { Component } from 'react'

// shared Imports
import FormTitle from '../../components/FormTitle/FormTitle';
import FormProgress from '../../components/FormProgress/FormProgress';

// Inner Imports
import Baseline from './Baseline/Baseline';
import SetTarget from './SetTargets/SetTarget';
import AddTask from './AddTask/AddTask';
import UploadDocs from './UploadDocs/UploadDocs';
import GeoLocation from './GeoLocation/GeoLocation';

export default class Complete extends Component {
    render() {
        return (
            <React.Fragment>
                <FormTitle 
                    Title = "Complete information on Indicator"
                    SubTitle ="Number of ha consolidated consolidated of ha consolidated consolidated under priority crops"/>

                <FormProgress/>

                {/* STAGE 1 */}
                <Baseline />

                {/* STAGE 2 */}
                <SetTarget />

                {/* STAGE 3 */}
                <AddTask />

                {/* STAGE 4 */}
                <UploadDocs />

                {/* STAGE 5 */}
                <GeoLocation />
                
            </React.Fragment>
        )
    }
}
