export interface IExecuteOrder {
    tournamentId: number;
    paymentId: string;
    payerId: string;
}

export interface IPayPalButton {
    clientId: string;
    currencyCode: string;
    mode: string;
    callback: (isLoaded: boolean) => void;
}