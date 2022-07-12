export type Currency = {
    id: string;
    rank: number;
    symbol: string;
    name: string;
    marketCapUsd: number;
    volumeUsd24Hr: number;
    priceUsd: number;
    changePercent24Hr: number;
    vwap24Hr: number, supply: number;
    explorer: string;
}

export interface MainProps {
    currencyList: Currency[];
}
