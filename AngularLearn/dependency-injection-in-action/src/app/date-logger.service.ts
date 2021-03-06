import {Inject, Injectable} from "@angular/core";
import {LoggerService} from "./logger.service";

@Injectable()
export class DateLoggerService extends LoggerService {
  logInfo(msg: any) {super.logInfo(stamp(msg)); }
  logDebug(msg: any) {super.logInfo(stamp(msg)); }
  logError(msg: any) {super.logInfo(stamp(msg)); }
}

function stamp(msg: any) {return msg + ' at ' + new Date(); }
