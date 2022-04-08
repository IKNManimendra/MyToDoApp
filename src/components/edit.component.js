import React, { Component } from "react";
import axios from "axios";

export default class Edit extends Component {

    constructor(props) {
        super(props);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeBody = this.onChangeBody.bind(this);

        //initial status
        this.state = {
            Date: '',
            Body: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/task/edit' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    Date: response.data.Date,
                    Body: response.data.Body
                });
            }).catch(function (error) {
                console.log(error);
            })
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
        const obj = {
            Date: this.state.Date,
            Body: this.state.Body
        };
        axios.post('http://localhost:4000/task/update' + this.props.match.params.id, obj)
            .then(res => this.console.log(res.data));
        this.props.history.push('/index');
    }


    render() {
        return (
            <div style={{ margineTop: 10, marginLeft: 180, marginRight: 250 }} >
                <h2>Update Your Task</h2><br />
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
                        <input className="btn btn-primary" type="submit" value="update"></input>
                    </div>
                </form>
            </div >
        )

    }
}