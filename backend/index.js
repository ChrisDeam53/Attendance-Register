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
Course.belongsTo(CourseLeader);
CourseLeader.belongsTo(Course);

//Course to Module, one course contains many modules
const CourseModules = sequelize.define('Course Modules', {}, { timestamps: false });
module.exports = CourseModules;
Course.belongsToMany(Module, { through: CourseModules });
Module.belongsToMany(Course, { through: CourseModules });

//Many groups in one module, one module per group
Module.hasMany(Group);
Group.belongsTo(Module);

//Many users in a module
const UserModules = sequelize.define('User Modules', {}, { timestamps: false });
module.exports = UserModules;
Module.belongsToMany(User, { through: UserModules });
User.belongsToMany(Module, { through: UserModules });

//Array of Lessons in a group
Lesson.belongsTo(Group);
Group.hasMany(Lesson);

//Array of groups in User, array of users in each group
const StudentGroups = sequelize.define('Student Groups', {}, { timestamps: false });
module.exports = StudentGroups;
Group.belongsToMany(Student, { through: StudentGroups });
Student.belongsToMany(Group, { through: StudentGroups });

//Lecturers in Groups and vice versa
const LecturerGroups = sequelize.define('Lecturer Groups', {}, { timestamps: false });
module.exports = LecturerGroups;
Group.belongsToMany(Lecturer, { through: LecturerGroups });
Lecturer.belongsToMany(Group, { through: LecturerGroups });

//Attendance Table
Lesson.belongsToMany(Student, { through: Attendance });
Student.belongsToMany(Lesson, { through: Attendance });

//Students to Academic Advisors
Student.belongsTo(AcademicAdvisor);
const AcademicAdvisees = sequelize.define('Academic Advisees', {}, { timestamps: false });
module.exports = AcademicAdvisees;
AcademicAdvisor.belongsToMany(Student, { through: AcademicAdvisees });

function createDummyData() {
    // student1.save();
    const student1 = Student.build({ User: { firstName: "Mazen", lastName: "Omar", username: "mo190201", password: "test123" } }, { include: [User] });
    student1.save();

    const lecturer1 = Lecturer.build({
        User: { firstName: "Nathan", lastName: "Blakemore", username: "nb2948382", password: "test123" }
    }, { include: [User] });
    // lecturer1.save();
    // const advisorUser = User.build({ firstName: "Nathan", lastName: "Blakemore", username: "nb2948382", password: "test123" })
    // advisorUser.save();
    const advisor1 = AcademicAdvisor.build({
        Lecturer: {
            User: { firstName: "Nathan", lastName: "Blakemore", username: "nb2948382", password: "test123" }
        }
    }, { include: [User, Lecturer] });
    // const advisor1 = AcademicAdvisor.build({
    //     Lecturer: {
    //         User: { firstName: "Nathan", lastName: "Blakemore", username: "nb2948382", password: "test123" }
    //     },
    //     { include: [User] }
    // }, { include: [Lecturer] });
    advisor1.save();

    // user2 = User.findOne({ where: { firstName: "Nathan" } });
    // userID = user2.id;

    // const lecturer2 = Lecturer.findOne({ where: { id: userID } });

    // const advisor1 = AcademicAdvisor.build();
    // advisor1.save();

    // AcademicAdvisor.upsert({
    //     id: 2,
    //     LecturerId: lecturer2.id,
    // })

}

//createDummyData();

//const sameAdvisor = AcademicAdvisor.findByPk(1);


//createDummyData();


// //student1.set({ AcademicAdvisor: {} })


async function clearTables() {
    await sequelize.drop();
}

//clearTables();

sequelize
    .sync()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })