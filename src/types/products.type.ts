export interface ITon {
  id: number;
  ton: string;
  colors: string[];
}

interface IDescription {
  heading: string;
  fullInfo: string[]
}

export interface IProducts {
  id: string;
  type: string;
  brand: string;
  title: string;
  price: number;
  discount: number;
  image: string;
  entrance: string;
  weight: string;
  stock: boolean;
  manufactures: string;
  description: IDescription;
  tons: ITon[];
}