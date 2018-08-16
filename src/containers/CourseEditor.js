import React from 'react';
import ModuleList from "./ModuleList";


export default class CourseEditor extends React.Component {
    constructor() {
        super();
        this.courseId = 0;
        console.log(this.match);
        console.log(this.props);
        this.state = {
            courseId: 0,
            inputValue: ''
        }
    }

    componentDidMount() {
        const { courseId } = this.props.match.params;
        this.setState( { courseId: courseId});
        this.courseId = courseId;
    }

    render() {
        return(
            <div className="container-fluid">
            <h1> Modules </h1>
            <ModuleList courseId={this.state.courseId}/>
            </div>
        );
    }
}