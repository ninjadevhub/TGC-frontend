import { IMockedTableData } from '../components/TournamentTable/types';

export const myTournamentsData: IMockedTableData = {
  tableHead: ['game mode', 'TournamentTable date', 'prize pool', 'Team size', 'registration'],
  tableBody: [
    {
      id: 0,
      gameMode: 'default',
      status: 'live',
      tournament: {
        name: 'Skill TournamentTable #57',
        label: 'Open',
        date: 'December 15, 2020'
      },
      prize: '$800',
      teamSize: null,
      registrationInfo: {
        status: 'Live Scoring',
        timeline: 'Ends in 2 days'
      }
    },
    {
      id: 2,
      gameMode: 'default',
      status: 'registered',
      tournament: {
        name: 'Skill TournamentTable #53',
        label: 'Closed',
        date: 'December 15, 2020'
      },
      prize: '$3,500',
      teamSize: null,
      registrationInfo: {
        status: 'Registered',
        timeline: 'Ends in 2 days'
      }
    },
    {
      id: 1,
      gameMode: 'default',
      status: 'completed',
      tournament: {
        name: 'Microsoft Sponsored Tour #2',
        label: 'Open',
        date: 'December 15, 2020'
      },
      prize: '$800',
      teamSize: null,
      registrationInfo: {
        status: 'Completed',
        timeline: 'Ends in 2 days'
      }
    },
    {
      id: 3,
      gameMode: 'default',
      status: 'completed',
      tournament: {
        name: 'Microsoft Sponsored Tour #2',
        label: 'Open',
        date: 'December 15, 2020'
      },
      prize: '$800',
      teamSize: null,
      registrationInfo: {
        status: 'Completed',
        timeline: 'Ends in 2 days'
      }
    }
  ]
}