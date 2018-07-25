import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';

// add this decorator because LoggingService is getting injected into this service
@Injectable()
export class AccountsService {
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
    // cross component communication. Trigger into a component and listen in other component
    statusUpdated = new EventEmitter<string>();

    // service inject into another service. Inject LoggingService within this servie
    constructor(private loggingService: LoggingService) {}

    addAccount(name: string, status: string) {
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusChange(status);
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
    }
}