import React, { Component } from 'react';
import axios from 'axios';



export default class Create extends Component {

    constructor(props) {
        super(props);
        //after
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeBody = this.onChangeBody.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        //initial status
        this.state = {
            Date: '',
            Body: ''
        }
    }

    //functions
    onChangeDate(e) {
        this.setState({
            Date: e.target.value
        });
    }
    onChangeBody(e) {
        this.setState({
            Body: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        console.log(`The values are ${this.state.Date},${this.state.Body}`);

        const obj = {
            Date: this.state.Date,
            Body: this.state.Body
        };
        axios.post('http://localhost:4000/task/add', obj)
            .then(res => console.log(res.data));
        this.setState({
            Date: '',
            Body: ''
        })
    }


    render() {
        return (
            <div style={{ margineTop: 10, marginLeft: 180, marginRight: 250 }} >
                <h2>Enter new Task</h2><br />
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label >Date</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="01.01.2022"
                            value={this.state.Date}
                            onChange={this.onChangeDate}
                        />
                    </div><br />
                    <div className="form-group">
                        <label >Task body</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter your task here"
                            value={this.state.Body}
                            onChange={this.onChangeBody}
                        />
                    </div><br />


                    <br /><br />
                    <div className="form-group" align="center">
                        <input className="btn btn-primary" type="submit" value="submit"></input>
                    </div>
                </form>
            </div >
        )
    }
}
