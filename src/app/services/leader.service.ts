import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders'

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeader (): Promise<Leader[]> {
    return new Promise(resolve =>{
      // Simulate server latecy with 2 second delay
      setTimeout(()=>resolve(LEADERS),2000);
    });

  }

  getFeaturedLeader():  Promise<Leader>{
    return new Promise(resolve =>{
      // Simulate server latecy with 2 second delay
      setTimeout(()=>resolve(LEADERS.filter((leader) => (leader.featured))[0]),2000);
    });
   
  }
}
