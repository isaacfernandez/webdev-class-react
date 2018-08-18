
const MODULE_API_URL =
    'https://wbdv-s2-1.herokuapp.com/api/course/CID/module/MID/lesson';

let _singleton = Symbol();
export default class LessonService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    findAllLessonsForModule(moduleId) {
        return fetch(
            MODULE_API_URL
                .replace('MID', moduleId).replace('CID', 1))
            .then(function (response) {
                return response.json();
            })
    }

    createLesson(mid, l) {
        return fetch(MODULE_API_URL.replace('CID', 1)
                .replace('MID', mid),
            {
                body: JSON.stringify(l),
                mode: "no-cors", // no-cors, cors, *same-origin
                headers: {'Content-Type': 'application/json'},
                method: 'POST'
            }).then(function (resp) {
            return resp;
        });
    }

    deleteLesson(lessonID) {
        return fetch('https://wbdv-s2-1.herokuapp.com/api/lesson/' + lessonID,
            {
                method: 'DELETE'
            }).then(function (resp) {
            return "empty";
        });
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new LessonService(_singleton);
        return this[_singleton];
    }

}
