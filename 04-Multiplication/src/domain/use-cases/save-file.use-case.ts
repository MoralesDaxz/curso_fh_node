export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}
export interface Options {
  fileContent: string;
  fileDestination: string;
  fileName: string;
}
export class SaveFile implements SaveFileUseCase {
  constructor() { }
  execute: (options: Options) => boolean{

  
        console.log(message);

    
        fs.mkdirSync(outputPath, { recursive: true });
        fs.writeFileSync(`${outputPath}/tabla-${multiplo}.txt`, message);
        console.log(`Archivo creado: ${outputPath}/tabla-${multiplo}.txt`);
     
  }
  

}
