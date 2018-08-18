import React from 'react';
import CourseCard from '../components/CourseCard'
import CourseService from "../services/CourseService";
import CourseList from "./CourseList";

export default class CourseManager extends React.Component {
    constructor() {
        super()
        this.state = {
            courses: [],
            inputValue: ''
        }
        this.createCourse = this.createCourse.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteFunc = this.deleteFunc.bind(this);
        this.courseService = CourseService.instance;
    }

    componentDidMount() {
        this.courseService.findAllCourses()
            .then(courses => {
                console.log(courses);
                this.setState({courses: courses});
            });
    }

    createCourse() {
        console.log(this.state.inputValue);
        var c = {
            title: this.state.inputValue,
            created: Date.now(),
            modified: Date.now()
        }
        this.courseService.createCourse(c)
            .then(() => this.courseService.findAllCourses())
            .then((courses) => this.setState({courses: courses, inputValue: ''}));
    }

    handleChange(event) {
        this.setState(
            {inputValue: event.target.value}
        );
    }

    deleteFunc(id) {
        this.courseService.deleteCourse(id)
            .then(() => this.courseService.findAllCourses())
            .then(courses => this.setState({courses: courses}))
    };

    render() {
        return (
            <div className="container-fluid">
                <h1>CourseManager</h1>
                <div className="container">
                    <div className="row">
                        <h5 className="col-md-auto float-left">New Course</h5>
                        <input value={this.state.inputValue}
                               onChange={this.handleChange}
                               className="col" placeholder="Course Title" />
                        <button onClick={this.createCourse} className="float-right btn btn-primary"> +
                        </button>
                    </div>
                    <CourseList del={this.deleteFunc} courses={this.state.courses}/>
                    <CourseCard/>
                </div>
            </div>

        )
            ;
    }
}