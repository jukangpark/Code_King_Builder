import { CreditCardIcon } from "@heroicons/react/24/outline";
import { PaymentMethod } from "../types";

interface PaymentMethodsTabProps {
  paymentMethods: PaymentMethod[];
}

export default function PaymentMethodsTab({
  paymentMethods,
}: PaymentMethodsTabProps) {
  return (
    <div className="p-4 lg:p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">결제 수단 관리</h3>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
          + 새 결제 수단 추가
        </button>
      </div>
      <div className="space-y-3 lg:space-y-4">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <CreditCardIcon className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <p className="font-medium text-gray-900">{method.name}</p>
                  {method.isDefault && (
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                      기본
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">
                  {method.type === "card" ? (
                    <>
                      {method.brand} •••• {method.last4}
                      {method.expiryDate && ` • 만료: ${method.expiryDate}`}
                    </>
                  ) : (
                    `계좌번호 •••• ${method.last4}`
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {!method.isDefault && (
                <button className="text-purple-600 hover:text-purple-700 text-sm">
                  기본 설정
                </button>
              )}
              <button className="text-red-600 hover:text-red-700 text-sm">
                삭제
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
