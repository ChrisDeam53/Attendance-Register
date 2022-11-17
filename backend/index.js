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


/**
 * @brief Function that creates dummy data
 * Do not call this function if the database is not created first( At the moment, if the database does not exist before this file is run, this will break)
 * No Params and no Return
 * @author Mazen
 * 
 */
async function createDummyData() {
    //Works to create a student and also their associated user. 
    const student1 = Student.build({ User: { firstName: "Mazen", lastName: "Omar", username: "mo190201", password: "test123" } }, { include: [User] });
    student1.save();


    //Works to create a lecturer and their associated user. 
    const lecturer1 = Lecturer.build({
        User: { firstName: "Nathan", lastName: "Blakemore", username: "nb2948382", password: "test123" }
    }, { include: [User] });
    lecturer1.save();

    //Trying to get around the problem above
    //First saving the associated lecturer
    const advisorlecturer1 = Lecturer.build({
        User: { firstName: "Chris", lastName: "Deam", username: "cd7484758", password: "test123" }
    }, { include: [User] });
    advisorlecturer1.save();
    //Then creating an academic advisor
    const advisor1 = AcademicAdvisor.build({}, {});
    advisor1.save();

    //Now trying to update the associated advisor coloumn to match with the ID of the lecturer created
    const user2 = await User.findOne({ where: { firstName: "Chris" } });
    const userID = user2.id;
    const lecturer2 = await Lecturer.findOne({ where: { UserId: userID } });
    AcademicAdvisor.upsert({
        id: 1,
        LecturerId: lecturer2.id,
    });



    //Creating a course leader
    const courseLeaderLecturer = Lecturer.build({
        User: { firstName: "Lantana", lastName: "Hewitt", username: "lh383847372", password: "test123" }
    }, { include: [User] });
    courseLeaderLecturer.save();
    //Then creating an academic advisor
    const courseLeader1 = CourseLeader.build({}, {});
    courseLeader1.save();

    //Now trying to update the associated course leader coloumn to match with the ID of the lecturer created
    const user3 = await User.findOne({ where: { firstName: "Lantana" } });
    const userID3 = user3.id;
    const lecturer3 = await Lecturer.findOne({ where: { UserId: userID3 } });
    CourseLeader.upsert({
        id: 1,
        LecturerId: lecturer3.id,
    });


    //Creating a course

    const csCourse = Course.build({ courseName: "BSc Computer Science", courseCode: "CS202348" });
    csCourse.save();

    const user4 = await User.findOne({ where: { firstName: "Lantana" } });
    const userID4 = user4.id;

    const lecturer4 = await Lecturer.findOne({ where: { UserId: userID4 } });
    // console.log(lecturer4.id);
    const courseLeader2 = await CourseLeader.findOne({ where: { LecturerId: lecturer4.id } });

    const courseID = await Course.findOne({ where: { courseName: "BSc Computer Science" } });
    // console.log(courseLeader2);
    // console.log(courseID);

    await CourseLeader.upsert({
        id: courseLeader2.id,
        CourseId: courseID.id
    });

    Course.upsert({
        id: courseID.id,
        courseName: "BSc Computer Science",
        CourseLeaderId: courseLeader2.id,
    })

}

//Do not run this command if the database does not already exist -IMPORTANT-
//createDummyData();


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