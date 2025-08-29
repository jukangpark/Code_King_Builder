import { PaymentHistory } from "../types";

interface PaymentsTabProps {
  paymentHistory: PaymentHistory[];
}

export default function PaymentsTab({ paymentHistory }: PaymentsTabProps) {
  return (
    <div className="p-4 lg:p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">결제 내역</h3>
      <div className="space-y-3 lg:space-y-4">
        {paymentHistory.map((payment) => (
          <div
            key={payment.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 lg:p-4 border border-gray-200 rounded-lg space-y-2 sm:space-y-0 hover:bg-gray-50 transition-colors"
          >
            <div>
              <p className="font-medium text-gray-900 text-sm lg:text-base">
                {payment.description}
              </p>
              <p className="text-xs lg:text-sm text-gray-600">{payment.date}</p>
            </div>
            <div className="text-left sm:text-right">
              <p className="font-semibold text-gray-900 text-sm lg:text-base">
                ₩{payment.amount.toLocaleString()}
              </p>
              <span
                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  payment.status === "completed"
                    ? "bg-green-100 text-green-800"
                    : payment.status === "pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {payment.status === "completed"
                  ? "완료"
                  : payment.status === "pending"
                  ? "대기중"
                  : "실패"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
