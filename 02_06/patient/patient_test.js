const PATIENT = require('./patient');
const TEST = require('node:test');
const ASSERT = require('node:assert/strict');

TEST.test("Patient Test", async () => {
    let patientName = "Paul", patientFamilyName = "Ovisxt", adultPatientAge = 35, minorPatientAge = 15;
    let adultPatient = new PATIENT.patient(patientName, patientFamilyName, adultPatientAge);
    let minorPatient = new PATIENT.patient(patientName, patientFamilyName, minorPatientAge);

    await TEST.test("Patient Naming", async () => {
        await TEST.test("Patient Has A Name", () => { ASSERT.strictEqual(patientName, adultPatient.name); });
        await TEST.test("Patient Has A Family Name", () => { ASSERT.strictEqual(patientFamilyName, adultPatient.familyName); });
    });
    await TEST.test("Patient Age", async () => {
        await TEST.test("Patient Age", () => { ASSERT.strictEqual(adultPatientAge, adultPatient.age); });
        await TEST.test("Adult Patient Is Adult", () => { ASSERT.strictEqual(true, adultPatient.isAdult); });
        await TEST.test("Minor Patient Is Minor", () => { ASSERT.strictEqual(false, minorPatient.isAdult); });
    });
});