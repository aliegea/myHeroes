import { Injectable } from '@angular/core';
import { MySelectedHero } from '../interfaces/MySelectedHero';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  sessionHeroeName: string = 'userData';
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
}
