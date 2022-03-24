import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  sessionHeroeName: string = 'MyHeroes';
  constructor() {}

  setData(data: any) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem('myData', jsonData);
  }

  getSessionHero(team: any[]) {
    if (sessionStorage.getItem(this.sessionHeroeName) == null) {
      this.saveSessionStorage(team);
    }
    return sessionStorage.getItem(this.sessionHeroeName);
  }

  saveSessionStorage(team: any) {
    sessionStorage.setItem(this.sessionHeroeName, JSON.stringify(team));
  }
}
