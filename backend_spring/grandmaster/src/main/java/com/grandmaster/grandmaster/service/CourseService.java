package com.grandmaster.grandmaster.service;

import com.grandmaster.grandmaster.model.Course;

import java.util.List;

public interface CourseService {

    List<Course> getAllCourses();

    Course getCourseById(Long id);

    Course createCourse(Course course);

    Course updateCourse(Long id, Course course);

    boolean deleteCourse(Long id);
}