import React from "react";
import CourseCard from "../components/CourseCard";

export default class CourseList extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    };




    render() {
        console.log(this.props.del);
        return (
            <ul className="list-group">
                {this.props.courses.map((course, index) =>
                    <CourseCard key={index}
                                title={course.title}
                                modified={course.modified}
                                created={course.created}
                                id={course.id}
                                del={this.props.del}
                    />)}
            </ul>
        );
    }
}
