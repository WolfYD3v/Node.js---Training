class Patient {
    constructor(_name, _familyName, _age) {
        this.name = _name;
        this.familyName = _familyName;
        this.age = _age;
        this.isAdult = this.age >= 18;
    }

    name = "";
    familyName = "";
    age = 0;
    isAdult = false;
}

exports.patient = Patient;
