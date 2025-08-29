interface PaymentHistory {
  id: string;
  amount: number;
  description: string;
  date: string;
  status: "completed" | "pending" | "failed";
}

const mockPaymentHistory: PaymentHistory[] = [
  {
    id: "1",
    amount: 99000,
    description: "STANDARD 패키지 결제",
    date: "2024-01-15",
    status: "completed",
  },
  {
    id: "2",
    amount: 399000,
    description: "DELUXE 패키지 결제",
    date: "2024-01-10",
    status: "completed",
  },
];

export default mockPaymentHistory;
