export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string | undefined;
}
export interface CreateTableOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor() {
    /* DI - Dependency Injection */
  }

  execute({ base, limit = 10 }: CreateTableOptions) {
    const line = "=======================";
    let message = `
 ${line}
 Tabla de Multiplicar -> ${base}
 ${line}`;
    for (let i = 1; i <= limit; i++) {
      message += `\n ${base} * ${i} = ${base * i}`;
      if (i === limit) {
        message += `\n${line}\n`;
      }
    }
    return message;
  }
}
