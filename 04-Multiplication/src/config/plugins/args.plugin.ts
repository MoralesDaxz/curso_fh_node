import yargs, { options } from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Multiplication table base",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "Multiplication table limit",
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Show multiplication table",
  })
  .check((argv, options) => {
    if (argv.b < 1) throw "Base must be a number > 0";
    if (argv.l < 10) throw "Base must be a number < || = 10";

    return true;
  })
  .parseSync();
