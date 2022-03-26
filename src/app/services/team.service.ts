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

  sendTeamData(teamData: MyTeam) {
    this.subject.next(teamData);
  }

  getTeamData(): Observable<MyTeam> {
    return this.subject.asObservable();
  }
}
