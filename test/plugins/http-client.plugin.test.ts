import { httpClientPlugin } from "../../src/plugins";

describe("httpClientPlugin", () => {
  const urlJson = "https://jsonplaceholder.typicode.com/todos/1";
  test("http client should return a obj", async () => {
    const data = await httpClientPlugin.get(urlJson);
    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: expect.any(Boolean), //false | true
    });
  });
  test("httpClientPlugin should have PUT,POST and Delete methods", () => {
    expect(typeof httpClientPlugin.post).toBe("function");
    expect(typeof httpClientPlugin.delete).toBe("function");
    expect(typeof httpClientPlugin.put).toBe("function");
  });
});
