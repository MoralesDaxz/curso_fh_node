import { buildLogger, logger as wistonLogger } from "../../src/plugins";

describe("", () => {
  test("", () => {
    const logger = buildLogger("test");
    expect(typeof logger.log).toBe("function");
    expect(typeof logger.error).toBe("function");
  });
  test("logger.log should call winston", () => {
    const winstonLoggerMock = jest.spyOn(wistonLogger, "log");
    const message = "test message";
    const service = "test service";
    const logger = buildLogger(service);
    expect(winstonLoggerMock).toHaveBeenCalledWith(
      "info",
      expect.objectContaining({ level: "info", message, service })
    );
  });
});
