export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  quantity: number;
  favorite: boolean;
  category: {
    id: number;
    name: string;
    image: string;
  };
};

export type ProductsType = ProductType[];
