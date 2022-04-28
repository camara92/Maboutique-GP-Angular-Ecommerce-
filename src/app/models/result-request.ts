export interface ResultRequest <T>{
//ce model de donnée va retourner les donnnées en succes par un boolean
isSuccess:boolean,
statusCode: number,
legnth: number,
results:Array<T>

}

//T : comme type de données qui sera attendue

