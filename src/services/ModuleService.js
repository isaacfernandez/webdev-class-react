
const MODULE_API_URL =
    'https://wbdv-s2-1.herokuapp.com/api/course/CID/module';
const BASE_URL =
    'https://wbdv-s2-1.herokuapp.com/api/module/MID'

let _singleton = Symbol();
export default class ModuleService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    findAllModulesForCourse(courseId) {
        return fetch(
            MODULE_API_URL
                .replace('CID', courseId))
            .then(function (response) {
                return response.json();
            })
    }

    createModule(courseId, module) {
        return fetch(MODULE_API_URL.replace('CID', courseId),
            {
                body: JSON.stringify(module),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (resp)
        { return resp.json(); })
    }

    deleteModule(moduleId) {
        return fetch(BASE_URL.replace('MID', moduleId),
            {
                method: 'DELETE'
            }).then(function(resp) {
                return "empty";
        });
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new ModuleService(_singleton);
        return this[_singleton]
    }
}
