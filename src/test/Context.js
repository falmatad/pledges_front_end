import React, { Component } from 'react'
// import AddContact from './test_components/AddContact'

// source/Context.js -------------------------------------------------
// => store the application state
const Context = React.createContext();

const reducer = (state,action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
    
        default:
        return state;
    }
}
 
class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'janvier',
                phone: 123123123123
            },
            {
                id: 2,
                name: 'james',
                phone: 123123123123
            },
            {
                id: 3,
                name: 'john',
                phone: 123123123123
            },
            {
                id: 4,
                name: 'jose',
                phone: 123123123123
            },
        ],
        dispatch: action => this.setState(state => reducer(state, action))
        
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

// exports const Consumer = Context.Consumer; // ==> <Consumer>
// <Context.Consumer>











// component/Contact.js -------------------------------------------------
// import {Consumer} from '../context.js'
const Contact = props => {
    const {name, phone, id} = props.contact;
    
    const onDeleteClick = (id, dispatch) => { 
        dispatch({type: 'DELETE_CONTACT', payload: id})
    }

    return (
        <Context.Consumer>
            {value => {
                const {dispatch} = value;
                return (
                    <div className="border mb-2 bg-secondary alert text-white">
                        <h2 className="h4 m-0 p-0">
                            {name} {"  "}
                            <button
                                onClick={onDeleteClick.bind(this, id, dispatch)}
                            className="btn btn-danger btn-sm">Delete</button>
                        </h2>
                        <p className="m-0 p-0 font-weight-normal">
                            {phone}
                        </p>
                    </div>
                )
            }}
        </Context.Consumer>
    )
}






// ADD CONTACT --------------------------------------------
class AddContact extends Component {
    state = {
        name: '',
        phone: ''
    };

    
    onSubmit = (dispatch, e) => {
        
        e.preventDefault();
        const {name,phone} = this.state;

        const newContact = {  
            id: 200,
            name,
            phone
        }

        dispatch({type: 'ADD_CONTACT', payload: newContact})

        this.setState({
            name: '',
            phone: ''
        })
    }
    
    onChange = e => this.setState({[e.target.name]: e.target.value})
    
    render() {
        const {name,phone} = this.state;

        return (
            <Context.Consumer>
                {value => {
                    const {dispatch} = value;
                    return (
                        <div className="card mb-3 pt-2 bg-light pb-3 container">
                            <h4>Add Contact</h4>
                            <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input 
                                        type="text"
                                        name="name"
                                        className="form-control form-control-sm"
                                        value={name} 
                                        onChange={this.onChange}
                                        />
                                </div>

                                <div className="form-group">
                                    <label>Phone</label>
                                    <input 
                                        type="text"
                                        name="phone"
                                        className="form-control form-control-sm" 
                                        value={phone}
                                        onChange={this.onChange}
                                        />
                                </div>
                                <input 
                                    type="submit" 
                                    value="Save"  
                                    className="btn btn-primary" />
                            </form>
                        </div>
                    )
                }}
            </Context.Consumer>
            
        )


    }
}








// component/Contacts.js -------------------------------------------------
// import {Consumer} from 'source/Context.js'
class Contacts extends Component {

    render () {
        return (
            <Context.Consumer>
                {value => {
                    const {contacts} = value;
                    return (
                        <React.Fragment>
                            <h1 className="text-center text-white bg-primary pb-2">Contacts {contacts.length} </h1>
                            <AddContact />
                            <div className="container">
                                {contacts.map(cont => <Contact key={cont.id} contact={cont} />)}
                            </div>
                        </React.Fragment>
                    )
                }}
            </Context.Consumer>
        )

  
    }
}


// ---------------------------------------  App.js
export default class ContextTest extends Component {
    render() {
        return (
            <Provider>
                <Contacts />
            </Provider>
        )
    }
}
