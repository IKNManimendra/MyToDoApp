import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

//rcc
export default class TableRow extends Component {


    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/task/delete/' + this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.Date}</td>
                <td>{this.props.obj.Body}</td>

                <td>
                    <Link to={"/edit/" + this.props.obj._id} className='btn btn-primary'>Edit</Link>
                </td>
                <td> <button onClick={this.delete} className="btn btn-danger">Delete</button></td>
            </tr>
        )
    }
}
