import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { JusticeLeagueService } from '../services/justice-league.service';
import { IJusticeLeagueMember } from '../interfaces/ijustice-league-member';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'alias', 'age', 'currentMember', 'memberSince', 'powers'];
  dataSource: MatTableDataSource<IJusticeLeagueMember>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private justiceLeagueService: JusticeLeagueService) { 
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(this.justiceLeagueService.getMembers());
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(Filter: string) {
    this.dataSource.filter = Filter.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
