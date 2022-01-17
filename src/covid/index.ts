interface CovidSummaryResponse {
  Countries: Country[];
  Date: string;
  Global: GlobalType;
  Message: string;
}

interface GlobalType {
  NewConfiremd: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfiremd: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

interface Country extends GlobalType {
  Country: string;
  CountryCode: string;
  Date: string;
  Premium: any;
  Slug: string;
}

export { CovidSummaryResponse, GlobalType };
