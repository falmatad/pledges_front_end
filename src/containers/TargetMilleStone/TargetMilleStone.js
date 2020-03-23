import React, { Component } from 'react'

// Shared Import
// import Evaluate from '../../shared/Evaluate/Evaluate';

// Inner inport
import Cover from './Cover/Cover'
import SummaryMap from './SummaryMap/SummaryMap';
import Gallery from './Gallery/Gallery';
import Documents from './Documents/Documents';
import Targets from './Targets/Targets';
import Budget from './Budget/Budget'
import Comments from './Comments/Comments';
import Evaluations from './Evaluations/Evaluations';
import Approve from './Approve/Approve'


export default class TargetMilleStone extends Component {
    render() {
        return (
            <React.Fragment>

                    <Cover />
                    <SummaryMap />
                    <Gallery />
                    <Documents />
                    <Targets />
                    <Budget />
                    <Comments />
                    <Evaluations />
                    <Approve />

                    {/* <Evaluate/> */}
            </React.Fragment>
        )
    }
}
