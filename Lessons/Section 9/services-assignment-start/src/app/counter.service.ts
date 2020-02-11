import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CounterService {
  addingActiveUserCount: number = 0;
  addingInactiveUserCount: number = 0;

  incrementActiveUserCount() {
    this.addingActiveUserCount++;
    console.log('addingActiveUserCount: ' + this.addingActiveUserCount);
  }

  incrementInactiveUserCount(){
    this.addingInactiveUserCount++;
    console.log('addingInactiveUserCount: ' + this.addingInactiveUserCount);
  }
}
