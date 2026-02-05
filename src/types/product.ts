interface IProduct {
  id: number;
  name: string;
  originalPrice: number;
  currentPrice: number;
  producer: string;
  format: "digital" | "fisico";
  deliveryTime: string;
};