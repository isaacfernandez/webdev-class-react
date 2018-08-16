import React, {Component} from 'react'
import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleService'
import ModuleEditor from "../containers/ModuleEditor";

export default class ModuleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            selectedModule: {},
            module: {title: ''},
            modules: []
        };
        this.createModule = this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.expand = this.expand.bind(this);
        this.titleChanged = this.titleChanged.bind(this);

        this.setCourseId = this.setCourseId.bind(this);
        this.setModules = this.setModules.bind(this);

        this.moduleService = ModuleService.instance;
    }

    setModules(modules) {
        this.setState({modules: modules})
    }

    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {
                this.setModules(modules)
            });
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId)
    }

    createModule() {
        this.moduleService
            .createModule(this.props.courseId, this.state.module)
            .then(() => this.findAllModulesForCourse(this.state.courseId));
    }

    titleChanged(event) {
        this.setState({module: {title: event.target.value}});
    }

    expand(mod) {
        console.log(mod);
        this.setState(
            {selectedModule: mod}
        )
    }

    deleteModule(id) {
        this.moduleService
            .deleteModule(id)
            .then(() => this.findAllModulesForCourse(this.state.courseId));
    }

    renderListOfModules() {
        console.log("Printing modules");
        let self = this;
        let modules = this.state.modules.map(function (module) {
            return <ModuleListItem
                module={module}
                key={module.id}
                expand={self.expand}
                del={self.deleteModule}/>
        });
        console.log(modules.length + " odules printed")
        return modules;
    }

    render() {
        return (<div>
            <div className="col-3 pull-left">
                <h3>Module List for course {this.props.courseId}</h3>
                <input onChange={this.titleChanged}
                       value={this.state.module.title}
                       placeholder="title"
                       className="form-control"/>
                <button onClick={this.createModule} className="btn btn-primary btn-block">
                    <i className="fa fa-plus"></i>
                </button>
                <br/>
                <ul className="list-group">
                    {this.renderListOfModules()}
                </ul>
            </div>
            <div className="col-6">
                <ModuleEditor module={this.state.selectedModule} />
            </div>
        </div>);
    }
}