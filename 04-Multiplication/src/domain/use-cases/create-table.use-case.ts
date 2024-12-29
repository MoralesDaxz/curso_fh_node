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
    let message = "";
    for (let i = 1; i <= limit; i++) {
      if (i === limit) {
        return (message += `${base} * ${i} = ${base * i}`);
      }
      message += `${base} * ${i} = ${base * i}\n`;
    }
    return message;
  }
}
