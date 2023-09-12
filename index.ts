import { createServer } from "./server";

const PORT = 3000;
const app = createServer();

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
