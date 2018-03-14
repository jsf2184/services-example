import {Component} from '@angular/core';
import {AccountsService} from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent {

  constructor(public accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe(
      (arg: {id: number, name: string, status: string}) => alert(
        'Status of service ' +
        arg.name +
        ' with id = ' +
        arg.id +
        ' changed to ' +
        arg.status
      )
    )
  }
}
