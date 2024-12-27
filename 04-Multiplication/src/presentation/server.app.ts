/* Orquesta nuestra aplicacion de entrada */

import { SaveFile } from "../domain/use-cases/save-file.use-case";
import { CreateTable } from "../domain/use-cases/create-table.use-case";

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  fileDestination: string;
  fileName: string;
}
export class ServerApp {
  static run({ base, limit, showTable, fileDestination, fileName }: RunOptions) {
    console.log("Server run... \n");
    const table = new CreateTable().execute({ base, limit });
    const wasCreated = new SaveFile().execute({
      fileContent: table,
      fileDestination: fileDestination,
      fileName: fileName
    });
    showTable ? console.log(table) : null;
    wasCreated ? console.log("File created") : console.log("Error creating file");

  }
}
