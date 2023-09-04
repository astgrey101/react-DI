import {ApiService} from "../ApiService";
import {token} from "brandi";
import {Logger} from "../Types";

export const Tokens = {
  logger: token<Logger>('logger'),
  apiService: token<ApiService>('apiService'),
};