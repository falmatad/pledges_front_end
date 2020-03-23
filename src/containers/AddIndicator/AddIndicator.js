import React, { Component } from 'react'
// shared Imports
import FormTitle from '../../components/FormTitle/FormTitle';
import FormProgress from '../../components/FormProgress/FormProgress';

// inner components
import CheckSelected from './CheckSelected/CheckSelected';
import NameSource from './NameSource/NameSource';
import Measurement from './Measurement/Measurement';
import BudgetType from './BudgetType/BudgetType';

export default class AddIndicator extends Component {
    render() {
        return (
            <React.Fragment>

            <div>
                <FormTitle 
                    Title = "Number of ha consolidated under priority crops"
                    SubTitle="Number of ha consolidated consolidated of ha consolidated consolidated under priority crops"/>

                <FormProgress/>

                {/* STAGE 1 */}
                <CheckSelected />

                {/* STAGE 2 */}
                <NameSource />

                {/* STAGE 3     */}
                <Measurement />

                {/* STATE 4 */}
                <BudgetType />
            </div>

            </React.Fragment>
        )
    }
}
