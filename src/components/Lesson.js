import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class Lesson extends React.Component {
    render() {
        return (
            <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.lesson.title}</h5>
                        <button className="btn btn-primary" onClick={() => this.props.del(this.props.lesson.id)}>Delete</button>
                    </div>
            </div>
        );
    }
}