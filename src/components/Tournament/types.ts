export interface IMockedTableData {
  tableHead: string[];
  tableBody: ITableRow[];
}

export type StatusTypes = 'closed'|'live'| 'completed' | 'open';
export interface ITableRow {
  id: number;
  status: StatusTypes;
  gameMode: string;
  tournament: {
    name: string;
    label: string;
    date: string;
  },
  prize: string;
  teamSize: number | null;
  registrationInfo: {
    status: string;
    showIcons?: boolean;
    timeline: string;
  }
}
export interface IStatus {
  status: StatusTypes;
  showIcons?: boolean;
}