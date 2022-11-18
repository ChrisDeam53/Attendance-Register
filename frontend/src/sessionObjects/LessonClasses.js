/**
 * Lesson class. Used to turn a new Lesson into a JSON object.
 */
class Lesson {
    constructor(date, time) {
        this.date = date;
        this.time = time;
    }

    get date() {
        return this.date();
    }

    get time() {
        return this.time();
    }

    setDate(enteredDate) {
        this.date = enteredDate;
    }

    setTime(enteredTime) {
        this.time = enteredTime;
    }

    createJSONObject() {
        JSON.stringify(this);
    }
}