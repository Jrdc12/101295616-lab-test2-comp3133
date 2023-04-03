import { Component, Input, OnInit } from '@angular/core';
import { Launch } from '../launch.model'; 

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
})
export class MissiondetailsComponent implements OnInit {
  @Input() selectedMission: Launch | null = null; 

  constructor() {}

  ngOnInit(): void {}
}
