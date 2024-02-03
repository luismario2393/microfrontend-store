export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  idDeleted?: number;
  rating: TRating;
}

type TRating = {
  rate: number;
  count: number;
};
