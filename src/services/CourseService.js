/**
 * /jannunzi/webdev-summer2-2018-client-react-jannunzi/master/src/services/CourseService.js
 * Primarily copies using the above file provided
 */

let _singleton = Symbol();
class CourseService {
    SERVER_URL = 'https://wbdv-s2-1.herokuapp.com/api/course';

    deleteCourse(courseId) {
        return fetch(this.SERVER_URL + '/' + courseId, {
            method: 'delete'
        })
            .then(function(response){
                return response;
            });
    }
    createCourse(course) {
        return fetch(this.SERVER_URL, {
            method: 'post',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function(response){
                return response.json();
            });
    }

    findAllCourses() {
        return fetch(this.SERVER_URL)
            .then(function(response){
                return response.json();
            });
    }

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new CourseService(_singleton);
        return this[_singleton]
    }

}
export default CourseService;
