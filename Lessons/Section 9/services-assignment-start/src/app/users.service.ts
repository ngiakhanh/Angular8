import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable({providedIn: 'root'})
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService){}

  addActiveUser(userName: string){
    if (this.inactiveUsers.indexOf(userName) !== -1) {
      const index = this.inactiveUsers.indexOf(userName);
      this.inactiveUsers.splice(index, 1);
    }
    this.activeUsers.push(userName);
    this.counterService.incrementActiveUserCount();
  }

  addInactiveUser(userName: string){
    if (this.activeUsers.indexOf(userName) !== -1) {
      const index = this.activeUsers.indexOf(userName);
      this.activeUsers.splice(index, 1);
    }
    this.inactiveUsers.push(userName);
    this.counterService.incrementInactiveUserCount();
  }
}
