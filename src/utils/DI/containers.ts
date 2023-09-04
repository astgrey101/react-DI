import {Container} from "brandi";
import {ConsoleLogger, ErrorLogger} from "../Logger";
import {Tokens} from "./tokens";
import {ApiService} from "../ApiService";
import {TAGS} from "./tags";

export const container = new Container();

container
  .bind(Tokens.logger)
  .toInstance(ConsoleLogger)
  .inTransientScope();

container
  .when(TAGS.planet)
  .bind(Tokens.logger)
  .toInstance(ErrorLogger)
  .inTransientScope();

container
  .bind(Tokens.apiService)
  .toInstance(ApiService)
  .inTransientScope();

container
  .when(TAGS.planet)
  .bind(Tokens.apiService)
  .toInstance(ApiService)
  .inTransientScope();
