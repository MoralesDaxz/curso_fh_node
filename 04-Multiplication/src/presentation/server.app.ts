/* Orquesta nuestra aplicacion de entrada */

import { CreateTable } from "../domain/use-cases/create-table.use-case";

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
}
export class ServerApp {
  static run({ base, limit, showTable }: RunOptions) {
    console.log("Server run... \n");
    const table = new CreateTable().execute({ base, limit });
    showTable ? console.log(table) : null;
  }
}
