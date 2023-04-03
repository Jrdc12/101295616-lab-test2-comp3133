import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css'],
})
export class MissionfilterComponent implements OnInit {
  @Output() yearSelected = new EventEmitter<number | null>();

  years: number[] = [];
  selectedYear: number | null = null;

  constructor() {}

  ngOnInit(): void {
    this.populateYears();
  }

  populateYears(): void {
    const currentYear = new Date().getFullYear();
    for (let year = 2006; year <= currentYear; year++) {
      this.years.push(year);
    }
  }

  onYearChange(): void {
    this.yearSelected.emit(this.selectedYear);
  }
}
