export interface IExecuteOrder {
    tournamentId: number | null;
    paymentId: string;
    payerId: string;
    token: string;
}

export interface IPayPalButton {
    tournamentId: number | null;
    clientId: string;
    currencyCode: string;
    mode: string;
    callback: (isLoaded: boolean) => void;
}