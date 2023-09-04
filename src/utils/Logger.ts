import {Logger} from "./Types";

export class ConsoleLogger implements Logger {
  public log(message: string): void {
    console.log(message)
  }
}

export class ErrorLogger implements Logger {
  public log(message: string): void {
    console.error(message)
  }
}
