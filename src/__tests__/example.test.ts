import app from "../.";
import supertest from "supertest";

describe("test example model", () => {
  const testApp = supertest(app);

  it("GET /", async () => {
    const res = await testApp.get("/");
    expect(res.statusCode).toBeGreaterThanOrEqual(200);
    expect(res.statusCode).toBeLessThan(300);
    expect(res.text).toBe("Hello World");
  });

  it("GET /example", async () => {
    const res = await testApp.get("/example");
    expect(res.statusCode).toBeGreaterThanOrEqual(200);
    expect(res.statusCode).toBeLessThan(300);
    expect(res.text).toBe("The model was get-ted");
  });
});
