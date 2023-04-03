import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../spacex.service';
import { Launch } from '../launch.model';
import { Router } from '@angular/router'; // Add this import

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
})
export class MissionlistComponent implements OnInit {
  launches: Launch[] = [];
  selectedMission: Launch | null = null;

  // Inject Router into the constructor
  constructor(private spacexService: SpacexService, private router: Router) {}

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

  // Update selectMission to navigate to missiondetails component
  selectMission(launch: Launch): void {
    this.router.navigate(['/missiondetails', launch.flight_number]);
  }
}
