import { Injectable } from '@angular/core';
import { IJusticeLeagueMember } from '../interfaces/ijustice-league-member';
import { JUSTICE_LEAGUE_MEMBERS } from '../data/justice-league-data';

@Injectable({
  providedIn: 'root'
})
export class JusticeLeagueService {

  members: IJusticeLeagueMember[] = [];

  constructor() {
    this.members = JUSTICE_LEAGUE_MEMBERS;
  }

  getMembers(): IJusticeLeagueMember[] {
    return this.members;
  }
}
