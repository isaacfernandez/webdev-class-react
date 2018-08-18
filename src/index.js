import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Link} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import CourseManager from "./containers/CourseManager";
import CourseEditor from "./containers/CourseEditor";
import BrowserRouter from "react-router-dom/es/BrowserRouter";

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import WidgetReducer from "./reducers/WidgetReducer";

let store = createStore(WidgetReducer)

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
            <BrowserRouter>
                <div className="container-fluid">
                    <Link to="/CourseManager">Course Manager</Link> |
                    <Route path='/CourseManager' component={CourseManager}/>
                    <Route path="/course/:courseId" component={CourseEditor}/>
                </div>
            </BrowserRouter>
                </Provider>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);