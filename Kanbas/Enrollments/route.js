import * as enrollmentsDao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.get("/api/enrollments", (req, res) => {
    const enrollments = enrollmentsDao.findAllEnrollments();
    res.json(enrollments);
  });

  app.get("/api/users/:userId/enrollments", (req, res) => {
    const { userId } = req.params;
    const userEnrollments = enrollmentsDao.findEnrollmentsForUser(userId);
    res.json(userEnrollments);
  });

  app.post("/api/enrollments", (req, res) => {
    const newEnrollment = enrollmentsDao.createEnrollment(req.body);
    res.json(newEnrollment);
  });

  app.delete("/api/enrollments/:enrollmentId", (req, res) => {
    const { enrollmentId } = req.params;
    const status = enrollmentsDao.deleteEnrollment(enrollmentId);
    res.json(status);
  });
}
