

export class LoggingService {


  constructor() {
    console.log('LoggingService constructed');
  }

  logStatusChange(id: number, name: string, status: string) {
    console.log('Server ' +
      name +
      ' with id: ' +
      id +
      ' status changed to: '
      + status);
  }

  logNewService(id: number, name: string, status: string) {
    console.log('Server ' +
      name +
      ' with id: ' +
      id +
      ', status changed to: ' +
      status);
  }

}
