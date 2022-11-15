const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "../backend/database.sqlite"

})

module.exports = sequelize;

//const sequelize = new Sequelize('sqlite::memory:');

const User =
    require("./models/user");
const Module =
    require("./models/module");
const Lesson =
    require("./models/lesson");
const Group =
    require("./models/group");
const Attendance =
    require("./models/attendance");
const Course =
    require("./models/course");
const Lecturer =
    require("./models/UserTypes/lecturer");
const Student =
    require("./models/UserTypes/student");
const AcademicAdvisor =
    require("./models/UserTypes/academicadvisor");
const CourseLeader =
    require("./models/UserTypes/courseleader");

//User Inheritance
Lecturer.belongsTo(User, { through: "Lecturer" });
Student.belongsTo(User, { through: "Student" });
AcademicAdvisor.belongsTo(Lecturer, { through: "Academic Advisor" });
CourseLeader.belongsTo(Lecturer, { through: "Course Leader" });

//Course Leader to Course
Course.hasOne(CourseLeader);
CourseLeader.hasOne(Course);

//Course to Module, one course contains many modules
Course.hasMany(Module);
Module.hasMany(Course);

//Many groups in one module, one module per group
Module.hasMany(Group);
Group.hasOne(Module);

//Many users in 
Module.belongsToMany(User, { through: "User Modules" });
User.belongsToMany(Module, { through: "User Modules" });

//Array of Lessons in a group
Lesson.hasOne(Group);
Group.hasMany(Lesson);

//Array of groups in User, array of users in each group
Group.belongsToMany(Student, { through: "Student Groups" });
Student.belongsToMany(Group, { through: "Student Groups" });

//Lecturers in Groups and vice versa
Group.belongsToMany(Lecturer, { through: "Lecturer Groups" });
Lecturer.belongsToMany(Group, { through: "Lecturer Groups" });

//Attendance Table
Lesson.belongsToMany(Student, { through: Attendance });
Student.belongsToMany(Lesson, { through: Attendance });

//Students to Academic Advisors
Student.hasOne(AcademicAdvisor);
AcademicAdvisor.hasMany(Student);


// const user1 = User.build({ firstName: "Mazen", lastName: "Omar", username: "mo190201", password: "test123" });
// user1.save();
// student1.save();
// const student1 = Student.build({ User: { firstName: "Mazen", lastName: "Omar", username: "mo190201", password: "test123" } }, { include: [User] });
// student1.save();
// Student.upsert({
//     id: 3,
//     AcademicAdvisorId: 3,
// });
// //student1.set({ AcademicAdvisor: {} })


sequelize
    .sync()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })