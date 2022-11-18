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

    createDummyUsers();
    createDummyCourse();
    createDummyModules();
    createDummyDataUserModules();
}

//Do not run this command if the database does not already exist -IMPORTANT-
createDummyData();



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

async function createDummyDataUserModules() {
    const lect5 = await User.findOne({ where: { firstName: "Shaun" } });

    const lect6 = await User.findOne({ where: { firstName: "Traci" } });

    const lect7 = await User.findOne({ where: { firstName: "Connell" } });

    const lect8 = await User.findOne({ where: { firstName: "Madge" } });

    const lect9 = await User.findOne({ where: { firstName: "Enid" } });

    //Collecting the modules and then setting their course leaders
    const modu1 = await Module.findOne({ where: { moduleName: "CAPS" } });

    const modu2 = await Module.findOne({ where: { moduleName: "SAD" } });

    const modu3 = await Module.findOne({ where: { moduleName: "Advanced Progamming" } });

    const modu4 = await Module.findOne({ where: { moduleName: "ADS" } });

    const modu5 = await Module.findOne({ where: { moduleName: "AI&ML" } });

    const modu6 = await Module.findOne({ where: { moduleName: "MATH" } });

    const um1 = UserModules.build({ ModuleId: modu1.id, UserId: lect5.id });
    um1.save();

    const um2 = UserModules.build({ ModuleId: modu1.id, UserId: lect6.id });
    um2.save();

    const um3 = UserModules.build({ ModuleId: modu1.id, UserId: lect7.id });
    um3.save();

    const um4 = UserModules.build({ ModuleId: modu1.id, UserId: lect8.id });
    um4.save();

    const um5 = UserModules.build({ ModuleId: modu1.id, UserId: lect9.id });
    um5.save();
}


async function createDummyModules() {
    //Creating a bunch of modules and then setting various lectureres to be their lectureres and also a module leader

    const module1 = Module.build({ moduleName: "CAPS", moduleCode: "CHA-3382", moduleLeader: lecturer2.id });
    module1.save();

    const module2 = Module.build({ moduleName: "SAD", moduleCode: "CHA-3382", moduleLeader: lect5id });
    module2.save();

    const module3 = Module.build({ moduleName: "Advanced Progamming", moduleCode: "CHA-3382", moduleLeader: lect6id });
    module3.save();

    const module4 = Module.build({ moduleName: "ADS", moduleCode: "CHA-3382", moduleLeader: lect7id });
    module4.save();

    const module5 = Module.build({ moduleName: "AI&ML", moduleCode: "CHA-3382", moduleLeader: lect8id });
    module5.save();

    const module6 = Module.build({ moduleName: "MATH", moduleCode: "CHA-3382", moduleLeader: lect9id });
    module6.save();

    //Collecting the modules and then setting their course leaders
    const modu1 = await Module.findOne({ where: { moduleName: "CAPS" } });

    const modu2 = await Module.findOne({ where: { moduleName: "SAD" } });

    const modu3 = await Module.findOne({ where: { moduleName: "Advanced Progamming" } });

    const modu4 = await Module.findOne({ where: { moduleName: "ADS" } });

    const modu5 = await Module.findOne({ where: { moduleName: "AI&ML" } });

    const modu6 = await Module.findOne({ where: { moduleName: "MATH" } });

    //Putting the various modules under the one course created

    const cm1 = CourseModules.build({ CourseId: courseID.id, ModuleId: modu1.id });
    cm1.save();

    const cm2 = CourseModules.build({ CourseId: courseID.id, ModuleId: modu2.id });
    cm2.save();

    const cm3 = CourseModules.build({ CourseId: courseID.id, ModuleId: modu3.id });
    cm3.save();

    const cm4 = CourseModules.build({ CourseId: courseID.id, ModuleId: modu4.id });
    cm4.save();

    const cm5 = CourseModules.build({ CourseId: courseID.id, ModuleId: modu5.id });
    cm5.save();

    const cm6 = CourseModules.build({ CourseId: courseID.id, ModuleId: modu6.id });
    cm6.save();
}


async function createDummyCourse() {

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



async function createDummyUsers() {
    //Works to create a student and also their associated user. 
    const student1 = Student.build({ User: { firstName: "Mazen", lastName: "Omar", username: "mo190201", password: "test123" } }, { include: [User] });
    student1.save();


    //Works to create a lecturer and their associated user. 
    const lecturer1 = Lecturer.build({
        User: { firstName: "Nathan", lastName: "Blakemore", username: "nb29498382", password: "test123", roleType: 1 }
    }, { include: [User] });
    lecturer1.save();


    //First saving the associated lecturer
    const advisorlecturer1 = Lecturer.build({
        User: { firstName: "Chris", lastName: "Deam", username: "cd7484758", password: "test123", roleType: 1 }
    }, { include: [User] });
    advisorlecturer1.save();
    //Then creating an academic advisor
    const advisor1 = AcademicAdvisor.build({}, {});
    advisor1.save();

    //Updating the lecturer to become an academic advisor
    const user2 = await User.findOne({ where: { firstName: "Chris" } });
    const userID = user2.id;
    const lecturer2 = await Lecturer.findOne({ where: { UserId: userID } });
    AcademicAdvisor.upsert({
        id: 1,
        LecturerId: lecturer2.id,
    });


    //Creating a course leader
    const courseLeaderLecturer = Lecturer.build({
        User: { firstName: "Lantana", lastName: "Hewitt", username: "lh383847372", password: "test123", roleType: 1 }
    }, { include: [User] });
    courseLeaderLecturer.save();
    //Then creating an course leader
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



    //Creating some dummy lecturers to make them module leaders and teachers
    const lecturer4 = Lecturer.build({
        User: { firstName: "Shaun", lastName: "Terrance", username: "st29498382", password: "test123", roleType: 1 }
    }, { include: [User] });
    lecturer4.save();

    const lecturer5 = Lecturer.build({
        User: { firstName: "Shaun", lastName: "Terrance", username: "st29498382", password: "test123", roleType: 1 }
    }, { include: [User] });
    lecturer5.save();

    const lecturer6 = Lecturer.build({
        User: { firstName: "Traci", lastName: "Elissa", username: "te323382", password: "test123", roleType: 1 }
    }, { include: [User] });
    lecturer6.save();

    const lecturer7 = Lecturer.build({
        User: { firstName: "Connell", lastName: "Mabelle", username: "cm2098309", password: "test123", roleType: 1 }
    }, { include: [User] });
    lecturer7.save();

    const lecturer8 = Lecturer.build({
        User: { firstName: "Madge", lastName: "Gerald", username: "mg29432323", password: "test123", roleType: 1 }
    }, { include: [User] });
    lecturer8.save();

    const lecturer9 = Lecturer.build({
        User: { firstName: "Enid", lastName: "Reagan", username: "er398309283", password: "test123", roleType: 1 }
    }, { include: [User] });
    lecturer9.save();

    //Making more students
    const student2 = Student.build({ User: { firstName: "Tiger", lastName: "Foster", username: "tf2312201", password: "test123" } }, { include: [User] });
    student2.save();

    const student3 = Student.build({ User: { firstName: "Ward", lastName: "Royle", username: "wr2837312", password: "test123" } }, { include: [User] });
    student3.save();

    const student4 = Student.build({ User: { firstName: "Arthur", lastName: "Finn", username: "tf2312201", password: "test123" } }, { include: [User] });
    student4.save();

    const student5 = Student.build({ User: { firstName: "Silvester", lastName: "Kodey", username: "sk2872871", password: "test123" } }, { include: [User] });
    student5.save();


}