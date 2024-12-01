import { getUUID } from "../../src/plugins";

describe("uuid testing", () => {
  const uuid = getUUID();
  test("UUID return a string", () => {
    expect(typeof uuid).toBe("string")
  });
  test("UUID length 36", () => {
    expect(uuid.length).toBe(36);
  });
});
