import React, { Component } from 'react'

// shared Imports
import FormTitle from '../../components/FormTitle/FormTitle';
import FormProgress from '../../components/FormProgress/FormProgress';

// Inner Components
import SearchCell from './SearchCell/SearchCell'
import SetBudget from './SetBudget/SetBudget'
import Team from './Team/Team'

// Modals
// import AddUser from '../../shared/AddUser/AddUser';
// import SearchUser from '../../shared/SearchUser/SearchUser';

export default class AddPlan extends Component {
    render() {
        return (
            <React.Fragment>
                <FormTitle 
                    Title = "Number of ha consolidated under priority crops"
                    SubTitle ="Number of ha consolidated consolidated of ha consolidated consolidated under priority crops"/>

                <FormProgress/>
                   
                   
                    {/* STAGE 1 */}
                    <SearchCell />

                    {/* SATEGE 2 */}
                    <SetBudget />

                    {/* STAGE 3 */}
                    <Team />
                    

                    {/* <SearchUser/> */}
                    {/* <AddUser/> */}
            </React.Fragment>
        )
    }
}
