import {LoggingService} from './logging.service';
import {Injectable} from '@angular/core';

@Injectable()

export class AccountsService implements  Iterable<{name: string, status: string}> {
  private accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private loggingService: LoggingService) {
    console.log('AccountsService constructed');
  }

  // Symbol.iterator is the name of the method which returns an Iterator.
  [Symbol.iterator](): Iterator<{ name: string; status: string }> {
    let idx = 0;
    const arr = this.accounts;
    const len = arr.length;

    return {
      next: function () {
        const res = {
          done:  idx >= len,
          value: idx < len ? arr[idx++] : null
        };
        return res;
      }
    }
  }

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChange(this.accounts.length - 1,
      name,
      status);

  }

  updateStatus (id: number, name: string, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(id, name, status);

  }
}
