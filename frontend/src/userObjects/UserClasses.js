
/**
 * Base User Class.
 * @param firstName - First Name of User
 * @param lastName - Last name of User
 * @param username - Username for User. Required for Login Verification.
 * @param password - Password for User. Required for Login Verification.
 * @param roleType - Roletype. Used to dynamoically show components.
 */
class User {
    constructor(firstName, lastName, username, password, roleType) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.username = username;
      this.password = password;
      this.roleType = roleType;
    }
}

class Student extends User {
    constructor(firstName, lastName, username, password, roleType) {
        super(firstName, lastName, username, password, roleType);
    }
}

class Lecturer extends User {
    constructor(firstName, lastName, username, password, roleType) {
        super(firstName, lastName, username, password, roleType);
    }
}


class CourseLeader extends Lecturer {
    constructor(firstName, lastName, username, password, roleType) {
        super(firstName, lastName, username, password, roleType);
    }
}


class AcademicAdvisor extends Lecturer {
    constructor(firstName, lastName, username, password, roleType) {
        super(firstName, lastName, username, password, roleType);
    }
}
