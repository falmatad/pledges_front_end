import React, { Component } from 'react'

export default class AddContact extends Component {
    state = {
        name: '',
        phone: ''
    };

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        
    }

    onChange = e => this.setState({[e.target.name]: e.target.value})

    render() {
        const {name,phone} = this.state;

        return (
            <div className="card mb-3 pt-2 bg-light pb-3 container">
                <h4>Add Contact</h4>
                <form onSubmit={this.onSubmit}>
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
    }
}
