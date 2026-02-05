import { api } from ".";

export const apiGetOrder = (orderId: string) => api.get<IGetOrderResponse>(`/order/${orderId}`);