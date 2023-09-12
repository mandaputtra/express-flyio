import supertest from "supertest";
import { createServer } from "./server";

const app = createServer();

describe("test /", () => {
  it("should be true", async () => {
    const response = await supertest(app).get("/");

    expect(response.status).toBe(200);
    expect(response.text).toBe("Express + TypeScript Server");
  });
});
