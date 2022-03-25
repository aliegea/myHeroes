import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MyTeam } from 'src/app/interfaces/MyTeam';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css'],
})
export class TeamFormComponent implements OnInit {
  myTeam!: MyTeam;
  @Output() myTeamData = new EventEmitter<MyTeam>();
  myForm: FormGroup = this.fb.group({
    nombre: [
      'My Heroes',
      [Validators.required, Validators.minLength(1), Validators.maxLength(15)],
    ],
    descripcion: [
      'Mis héroes favoritos',
      [Validators.required, Validators.minLength(3), Validators.maxLength(50)],
    ],
  });
  isValidForm(field: string) {
    return (
      this.myForm.controls[field]?.errors &&
      this.myForm.controls[field]?.touched
    );
  }

  addteamData() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.teamServ.sendTeamData(this.myForm.value);
    localStorage.setItem('My Team', JSON.stringify(this.myForm.value));
  }
  constructor(private fb: FormBuilder, private teamServ: TeamService) {}

  ngOnInit(): void {}
}
