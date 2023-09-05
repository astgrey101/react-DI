import {Logger, People, Planets, Result} from "./Types";
import {injected} from "brandi";
import {Tokens} from "./DI/tokens";

export class ApiService {
  // constructor(private logger: Logger,) {}

  private logger: Logger;

  setLogger(logger: Logger) {
    this.logger = logger;
  }

  async getPeople() {
    return await fetch('https://swapi.dev/api/people').then(res => res.json()).then((data: Result<People>) => {
      this.logger.log(`Received ${data.results.length.toString()} people`)
      return data.results
    })
  }

  async getPlanets() {
    return await fetch('https://swapi.dev/api/planets').then(res => res.json()).then((data: Result<Planets>) => {
      this.logger.log(`Received ${data.results.length.toString()} planets`)
      return data.results
    })
  }
}

injected(ApiService)
