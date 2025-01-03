import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server.app";

(async () => {
  await main();
})();

async function main() {
  const { b: base, l: limit, s: showTable, n:fileName, d:fileDestination } = yarg;
  /* console.log("Se ejecuta -> main - 1"); */

  ServerApp.run({ base, limit, showTable,fileName,fileDestination });
}
