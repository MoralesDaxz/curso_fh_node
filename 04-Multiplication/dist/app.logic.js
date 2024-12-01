"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const outputPath = "outputs";
const multiplo = 5;
const line = "=======================";
let message = `
 ${line}
 Tabla de Multiplicar -> ${multiplo}
 ${line}`;
for (let i = 1; i < 10; i++) {
    message += `\n ${multiplo} * ${i} = ${multiplo * i}`;
    if (i === 9) {
        message += `\n${line}\n`;
    }
}
fs_1.default.mkdirSync(outputPath, { recursive: true });
fs_1.default.writeFileSync(`${outputPath}/tabla-${multiplo}.txt`, message);
console.log(message);
