import React from 'react';
import LessonTabs from "./LessonTabs";


export default class ModuleEditor extends React.Component {

    render() {
        if (typeof this.props.module.title === 'undefined') {
            return null;
        } else {
            return (
                <div>
                    <h2>{this.props.module.title}</h2>
                    <LessonTabs id={this.props.module.id}/>
                </div>

            );
        }
    }
}