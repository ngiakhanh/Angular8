import { Component, EventEmitter, Output } from '@angular/core';
import {LoggingService} from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService,
    private accountsService: AccountsService){
      accountsService.statusUpdated.subscribe(
        (status: string) => alert('Status: ' + status)
      )
  }

  onCreateAccount(newAccount: {name: string, status: string}) {
    this.accountsService.addAccount(newAccount);
    //this.loggingService.logStatusChange(newAccount.status);
  }
}
