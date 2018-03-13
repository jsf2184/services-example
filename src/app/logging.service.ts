

export class LoggingService {


  constructor() {
    console.log('LoggingService constructed');
  }

  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
