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
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

interface Country extends GlobalType {
  Country: string;
  CountryCode: string;
  Date: string;
  Premium: string;
  Slug: string;
}

interface CountrySummaryInfo {
  Cases: number;
  City: string;
  CityCode: string;
  Country: string;
  CountryCode: string;
  Date: string;
  Lat: string;
  Lon: string;
  Proivnce: string;
  Status: string;
}

export type CountrySummaryResponse = CountrySummaryInfo[];

export { CovidSummaryResponse, GlobalType, Country, CountrySummaryInfo };
