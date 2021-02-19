import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function loadCourseSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(courses) {
  return { type: types.CREATE_COURSE_SUCCESS, courses };
}

export function updateCourseSuccess(courses) {
  return { type: types.UPDATE_COURSE_SUCCESS, courses };
}

export function loadCourses() {
  return function(dispatch) {
    return courseApi.getCourses().then(courses=> {
      dispatch(loadCourseSuccess(courses));
    }).catch(error=> {
      throw error;
    });
  }
}

export function saveCourse(course) {
  return function(dispatch, getState) {
    debugger;
    return courseApi.saveCourse(course).then(savedCourse=> {
      course.id ? dispatch(updateCourseSuccess(course)) :
                  dispatch(createCourseSuccess(course))
    }).catch(error=> {
      throw error;
    });
  }
}