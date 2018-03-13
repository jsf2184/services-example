import {bind} from '@angular/core/src/render3/instructions';

export class AccountsService implements  Iterable<{name: string, status: string}> {
  idx = 0;
  accounts = [
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

  constructor() {
    console.log('AccountsService constructed');
  }

  [Symbol.iterator](): Iterator<{ name: string; status: string }> {

      return {
        next: function () {
          const len = this.accounts.length;
          const res = {
            done:  this.idx >= len,
            value: this.idx < len ? this.accounts[this.idx] : null
          };

          if (res.value) {
            console.log('AccountsService iterator: res.value.name=' +
              res.value.name +
              ', res.value.status=' +
              res.value.status +
              ', idx=' +
              this.idx
            );
          } else {
            console.log('AccountsService iterator: res.value=null with idx=' +
              this.idx
            );
          }
          this.idx++;
          return res;
        }.bind(this)
      }
  }

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
  }

  updateStatus (id: number, status: string) {
    this.accounts[id].status = status;
  }
}
