import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import CourseManager from "./containers/CourseManager";
import CourseEditor from "./containers/CourseEditor";
import BrowserRouter from "react-router-dom/es/BrowserRouter";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    <Link to="/CourseManager">Course Manager</Link> |
                    <Route path='/CourseManager' component={CourseManager}/>
                    <Route path="/course/:courseId" component={CourseEditor}/>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);