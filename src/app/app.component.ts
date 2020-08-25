import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IJusticeLeagueMember } from './interfaces/ijustice-league-member';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['name', 'alias', 'age', 'currentMember', 'memberSince', 'powers'];
  dataSource: MatTableDataSource<IJusticeLeagueMember>;

  constructor() {
  }

  ngOnInit() {
  }
}
