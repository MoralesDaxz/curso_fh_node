import { getAge } from "../../src/plugins";

test("getAge should return the age of a person", () => {
  const birthDate = "1990-01-01";
  const age = getAge(birthDate);
  expect(typeof age).toBe("number");
});
test("getAge should return current age", () => {
  const birthDate = "1990-01-01";
  const age = getAge(birthDate);
  const calculatedAge =
    new Date().getFullYear() - new Date(birthDate).getFullYear();
  expect(age).toBe(calculatedAge);
});

test("getAge should return 0 years", () => {
  const spy = jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(1995);
  const birthDate = "1990-01-01";
  const age = getAge(birthDate);
  expect(age).toBe(0);
});
