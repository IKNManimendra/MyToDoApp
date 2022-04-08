import React, { Component } from "react";
import axios from "axios";
import TableRow from './TableRow';

//gets data from database and display

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = { task: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/task')
            .then(Response => {
                this.setState({ task: Response.data });
            }).catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        return this.state.task.map(function (object, i) {
            return <TableRow obj={object} key={i} />;
        });
    }


    render() {
        return (
            <div>
                <h3 align="center">Your Task list</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Task</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        )
    }
}