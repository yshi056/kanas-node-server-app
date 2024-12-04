import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: Date.now().toString(), user: userId, course: courseId });
}

export function findAllEnrollments() {
    return Database.enrollments;
  }
  
  export function findEnrollmentsForUser(userId) {
    return Database.enrollments.filter((enrollment) => enrollment.user === userId);
  }
  
  export function createEnrollment(enrollment) {
    const newEnrollment = { ...enrollment, _id: Date.now().toString() };
    Database.enrollments = [...Database.enrollments, newEnrollment];
    return newEnrollment;
  }
  
  export function deleteEnrollment(enrollmentId) {
    Database.enrollments = Database.enrollments.filter(
      (enrollment) => enrollment._id !== enrollmentId
    );
    return { status: "success" };
  }