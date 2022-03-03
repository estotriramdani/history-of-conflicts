export interface ResponseAPI {
  status: boolean;
  message: string;
  data: any;
}

export interface PartInterface {
  id: number;
  name: string;
  from: any;
  to: any;
  link: string;
}

export interface ResponseAPISectionsData {
  itemsPerSection: number;
  section: number;
  startIndex: number;
  endIndex: number;
  maxSection: number;
  data: PartInterface[];
}

export interface ResponseAPISections extends ResponseAPI {
  data: ResponseAPISectionsData;
}
export interface ResponseAPIPart extends ResponseAPI {
  data: {
    Date: number | string;
    Headline: string;
    'Conflict Type': string;
    Country: string;
    Region: string;
    Description: string;
    Sources: string;
  }[];
}
