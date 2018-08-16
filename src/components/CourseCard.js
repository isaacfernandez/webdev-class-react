import React from 'react';
import {Link} from 'react-router-dom'

export default class CourseCard extends React.Component {
    render() {
        console.log(this.props.del);
        if (this.props.id === undefined) {
            return null;
        }
        return <div className="row">
            <Link to={`/course/${this.props.id}`}>
                <h5 className="col-md-auto float-left"> {this.props.title} </h5>
            </Link>
            <p className="col">Created: {this.props.created} </p>
                <p className="col">Modified: {this.props.modified} </p>
            <button onClick={() => this.props.del(this.props.id)}>X</button>
        </div>;
    }
}