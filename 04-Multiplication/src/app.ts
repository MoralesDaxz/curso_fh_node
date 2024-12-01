import { yarg as argv } from "./config/plugins/args.plugin";

/* console.log("process", process.argv);

console.log("argv", argv.b); */

/* 
const [tsnode, app, ...args] = process.argv;
console.log(args);
 */

(async () => {
  await main();
  /* console.log("Fin ejecucion -2"); */
})();

async function main() {
  /* console.log("Se ejecuta -> main - 1"); */
  console.log(argv);
 
  
  
}
