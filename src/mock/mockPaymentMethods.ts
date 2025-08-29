interface PaymentMethod {
  id: string;
  type: "card" | "bank";
  name: string;
  last4?: string;
  brand?: string;
  isDefault: boolean;
  expiryDate?: string;
}

const mockPaymentMethods: PaymentMethod[] = [
  {
    id: "1",
    type: "card",
    name: "신한카드",
    last4: "1234",
    brand: "Visa",
    isDefault: true,
    expiryDate: "12/25",
  },
  {
    id: "2",
    type: "card",
    name: "KB국민카드",
    last4: "5678",
    brand: "Mastercard",
    isDefault: false,
    expiryDate: "03/26",
  },
  {
    id: "3",
    type: "bank",
    name: "신한은행",
    last4: "9012",
    isDefault: false,
  },
];

export default mockPaymentMethods;
