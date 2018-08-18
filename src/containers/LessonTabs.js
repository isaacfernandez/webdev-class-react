import React from 'react';
import Lesson from "../components/Lesson";
import LessonService from "../services/LessonService";
import WidgetListContainer from "./WidgetListContainer";


export default class LessonTabs extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedLesson: '',
            moduleID: null,
            lessonTitle: '',
            lessons: []
        };

        this.setLessons = this.setLessons.bind(this);
        this.setSelectedLesson = this.setSelectedLesson.bind(this);
        this.findLessonsForModule = this.findLessonsForModule.bind(this);

        this.renderAllLesson = this.renderAllLesson.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
        this.lessonService = LessonService.instance;
    }

    setLessons(lessons) {
        this.setState({lessons: lessons});
    }

    setSelectedLesson(lesson) {
        this.setState({selectedLesson: lesson})
    }

    setModuleID(mID) {
        this.setState({moduleID: mID});

    }

    findLessonsForModule() {
        console.log("pulling lessons");
        this.lessonService.findAllLessonsForModule(this.props.id)
            .then( (ll) => this.setLessons(ll) )
    }

    createLesson(l_title) {
        this.lessonService
            .createLesson(this.props.id, l_title)
            .then(()  => this.findLessonsForModule(this.state.id));
    }

    deleteLesson(lessonID) {
        this.lessonService.deleteLesson(lessonID)
            .then( () => this.findLessonsForModule());
    }


    renderAllLesson() {
        console.log(this.state);
        let self = this;
        let rendered = this.state.lessons.map(function (lesson) {
            return <Lesson
                lesson={lesson}
                key={lesson.id}
                del={self.deleteLesson}
                selles={self.setSelectedLesson}
            />
        });
        return rendered;
    }

    titleChanged(event) {
        this.setState({lessonTitle: event.target.value});
    }

    componentWillReceiveProps(newProps) {
        this.setModuleID(newProps.id);
        this.findLessonsForModule();
    }


    componentDidMount() {
        this.setModuleID(this.props.id);
        this.findLessonsForModule();
    }


    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <div className="card pull-left" style={{width: '16rem'}}>
                    <div className="card-body">
                        <input onChange={this.titleChanged}
                               value={this.state.lessonTitle}
                            type="text" placeholder="Title here" className="card-title"></input>
                        <p className="card-text">Create a new Lesson</p>
                        <button onClick={() => this.createLesson(this.state.lessonTitle)}
                                className="btn btn-primary">Create</button>
                    </div>
                    <div>
                        {this.renderAllLesson()}
                    </div>
                </div>

                <WidgetListContainer lessonId={this.state.selectedLesson.id} />
            </div>);
    }
}