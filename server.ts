import express, { Express, Response } from "express";

export function createServer() {
  const app: Express = express();

  app.get("/", (_, res: Response) => {
    res.send("Express + TypeScript Server");
  });

  return app;
}
