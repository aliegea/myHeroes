import { Thumbnail } from './HeroInterface';
import { MyTeam } from './MyTeam';
export class MySelectedHero {
  id!: number;
  name!: string;
  thumbnail!: Thumbnail;
}
export class MyUser {
  myTeam!: MyTeam;
  myHeroes!: MySelectedHero[];
}
