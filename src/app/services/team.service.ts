import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MySelectedHero } from '../interfaces/MySelectedHero';
import { MyTeam } from '../interfaces/MyTeam';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  sessionHeroeName: string = 'userData';
  subject = new Subject<MyTeam>();
  constructor() {}

  setData(data: any) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem('myData', jsonData);
  }
  getSessionHero(data: any) {
    if (sessionStorage.getItem(this.sessionHeroeName) == null) {
      this.saveSessionStorage(data);
    }
    return sessionStorage.getItem(this.sessionHeroeName);
  }

  saveSessionStorage(data: any[]) {
    sessionStorage.setItem(this.sessionHeroeName, JSON.stringify(data));
  }
  sendTeamData(teamData: MyTeam) {
    this.subject.next(teamData);
  }

  getTeamData(): Observable<MyTeam> {
    return this.subject.asObservable();
  }
}
