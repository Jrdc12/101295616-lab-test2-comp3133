import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../spacex.service';
import { Launch } from '../launch.model'; 

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
})
export class MissionlistComponent implements OnInit {
  launches: Launch[] = []; 
  selectedMission: Launch | null = null;

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.fetchLaunches();
  }

  fetchLaunches(year?: number): void {
    this.spacexService.getLaunches(year).subscribe((data: Launch[]) => {
      this.launches = data;
    });
  }

  onYearSelected(year: number | null): void {
    this.fetchLaunches(year === null ? undefined : year);
  }

  selectMission(mission: Launch): void {
    this.selectedMission = mission;
  }
}
