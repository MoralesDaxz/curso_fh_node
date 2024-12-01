import fs from "fs";
import { yarg } from "./config/plugins/args.plugin";

console.log(yarg);
const { b: base, l: limit, s: showTable } = yarg;
const outputPath = "outputs";
const multiplo = base;
const line = "=======================";
let message = `
 ${line}
 Tabla de Multiplicar -> ${multiplo}
 ${line}`;
for (let i = 1; i < limit; i++) {
  message += `\n ${multiplo} * ${i} = ${multiplo * i}`;
  if (i === limit) {
    message += `\n${line}\n`;
  }
}
const makeFile = () => {
  if (showTable) {
    console.log(message);
  }
  if (multiplo > 0) {
    fs.mkdirSync(outputPath, { recursive: true });
    fs.writeFileSync(`${outputPath}/tabla-${multiplo}.txt`, message);
    console.log(`Archivo creado: ${outputPath}/tabla-${multiplo}.txt`);
  }
};
makeFile();
