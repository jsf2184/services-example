import {Component} from '@angular/core';
import {AccountsService} from './accounts.service';
import {LoggingService} from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService, LoggingService]
})

export class AppComponent {

  constructor(private loggingService: LoggingService,
              public accountsService: AccountsService) {
  }
}
