import { IMockedTableData } from './types';

export const mockedTableData: IMockedTableData = {
  tableHead: ['game mode', 'Tournament date', 'prize pool', 'Team size', 'registration'],
  tableBody: [
    {
      id: 0,
      gameMode: 'default',
      status: 'open',
      tournament: {
        name: 'Skill Tournament #57',
        label: 'Open',
        date: 'December 15, 2020'
      },
      prize: '$3,000',
      teamSize: null,
      registrationInfo: {
        status: 'Register',
        timeline: 'End in 5h'
      }
    },
    {
      id: 1,
      gameMode: 'default',
      status: 'open',
      tournament: {
        name: 'Skill Tournament #57',
        label: 'Open',
        date: 'December 15, 2020'
      },
      prize: '$3,000',
      teamSize: null,
      registrationInfo: {
        status: 'Register',
        timeline: 'Ends in 2 days'
      }
    },
    {
      id: 2,
      gameMode: 'default',
      status: 'closed',
      tournament: {
        name: 'Skill Tournament #57',
        label: 'Open',
        date: 'December 15, 2020'
      },
      prize: '$800',
      teamSize: 146,
      registrationInfo: {
        status: 'Registration Closed',
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
    },
    {
      id: 4,
      gameMode: 'default',
      status: 'live',
      tournament: {
        name: 'Skill Tournament #57',
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
      id: 5,
      gameMode: 'default',
      status: 'closed',
      tournament: {
        name: 'Skill Tournament #53',
        label: 'Open',
        date: 'December 15, 2020'
      },
      prize: '$3,500',
      teamSize: null,
      registrationInfo: {
        status: 'Cerm',
        showIcons: true,
        timeline: 'Ends in 2 days'
      }
    },
    {
      id: 5,
      gameMode: 'default',
      status: 'closed',
      tournament: {
        name: 'Skill Tournament #53',
        label: 'Open',
        date: 'December 15, 2020'
      },
      prize: '$3,000',
      teamSize: 146,
      registrationInfo: {
        status: 'Exterm',
        showIcons: true,
        timeline: 'Ends in 2 days'
      }
    },
    {
      id: 5,
      gameMode: 'default',
      status: 'closed',
      tournament: {
        name: 'Skill Tournament #53',
        label: 'Open',
        date: 'December 15, 2020'
      },
      prize: '$1,750',
      teamSize: null,
      registrationInfo: {
        status: 'MissY',
        showIcons: true,
        timeline: 'Ends in 2 days'
      }
    },
    {
      id: 5,
      gameMode: 'default',
      status: 'closed',
      tournament: {
        name: 'Skill Tournament #53',
        label: 'Open',
        date: 'December 15, 2020'
      },
      prize: '$5,000',
      teamSize: 133,
      registrationInfo: {
        status: 'Rooooste3',
        showIcons: true,
        timeline: 'Ends in 2 days'
      }
    },
    {
      id: 5,
      gameMode: 'default',
      status: 'closed',
      tournament: {
        name: 'Skill Tournament #53',
        label: 'Open',
        date: 'December 15, 2020'
      },
      prize: '$4,200',
      teamSize: null,
      registrationInfo: {
        status: 'Bip',
        showIcons: true,
        timeline: 'Ends in 2 days'
      }
    },
  ]
}