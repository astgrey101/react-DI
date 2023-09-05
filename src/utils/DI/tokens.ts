import {ApiService} from "../ApiService";
import {Factory, token} from "brandi";
import {Logger} from "../Types";

export const Tokens = {
  logger: token<Logger>('logger'),
  apiService: token<ApiService>('apiService'),
  apiServiceFactory: token<Factory<ApiService, [Logger]>>('Factory<ApiService>'),
};