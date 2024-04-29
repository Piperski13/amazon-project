import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js"; //dayjs library

export const deliveryOptions = [
  {
    id: '1',
    deliveryDays: 7,
    priceCents: 0
  },
  {
    id: '2',
    deliveryDays: 3,
    priceCents: 499
  },
  {
    id: '3',
    deliveryDays: 1,
    priceCents: 999
  }
];

export function calculateDeliveryDate(deliveryOption){
  const today = dayjs();
  const deliveryDate  = today.add(deliveryOption,'days');
  const formatedDate = deliveryDate.format('dddd, MMMM D');
  return formatedDate;
}