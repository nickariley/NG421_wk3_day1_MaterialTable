import { IJusticeLeagueMember } from '../interfaces/ijustice-league-member';

const JUSTICE_LEAGUE_MEMBERS: IJusticeLeagueMember[] = [
    {
        name: 'Superman',
        alias: 'Clark Kent',
        age: 34,
        currentMember: true,
        memberSince: new Date('9/22/1985'),
        powers: ['Flight', 'Invulnerability', 'HeatVision']
    },
    {
        name: 'Batman',
        alias: 'Clark Kent',
        age: 34,
        currentMember: true,
        memberSince: new Date('9/22/1985'),
        powers: ['Flight', 'Invulnerability', 'HeatVision']
    }
];

export {JUSTICE_LEAGUE_MEMBERS};
