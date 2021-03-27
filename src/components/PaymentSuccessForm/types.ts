export interface IPaymentSuccessFormData {
    email: string;
    platform: string;
    platformId: string;
    teamName: string;
} 

export interface IIviteTeamMate {
    creationToken: string; 
    receivers?: string[]; 
    teamName: string;
    platformId: string; 
    platformType: string;
    token: string;
}