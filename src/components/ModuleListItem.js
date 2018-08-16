import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class ModuleListItem extends React.Component {
    render() {
        return (
            <li className="list-group-item">
                <div className="row">
                    <button onClick={() => this.props.expand(this.props.module)}
                            className="btn col-9">
                        {this.props.module.title}</button>
                    <button onClick={() => this.props.del(this.props.module.id)}
                            className="btn-danger col-3">X</button>
                </div>
            </li>);
    }
}