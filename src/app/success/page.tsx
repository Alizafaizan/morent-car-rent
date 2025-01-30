// import Link from "next/link";
// import { CheckCircle } from "lucide-react";

// export default function PaymentSuccessPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-500 wrapper">
//       <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Payment Successful!
//         </h1>
//         <div className="flex justify-center mb-6">
//           <CheckCircle className="w-20 h-20 text-blue-500" />
//         </div>
//         <p className="text-center text-gray-600 mb-8">
//           Thank you for your purchase. Your payment has been processed
//           successfully.
//         </p>
//         <div className="text-center">
//           <Link
//             href="/generate-tracking"
//             className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
//           >
//             Generate Tracking Number!{" "}
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import Link from "next/link";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const PaymentStatus = {
  SUCCESS: 'success',
  PENDING: 'pending',
  FAILED: 'failed'
};

const StatusIcons = {
  [PaymentStatus.SUCCESS]: CheckCircle,
  [PaymentStatus.PENDING]: AlertCircle,
  [PaymentStatus.FAILED]: XCircle
};

const StatusColors = {
  [PaymentStatus.SUCCESS]: 'text-green-500',
  [PaymentStatus.PENDING]: 'text-yellow-500',
  [PaymentStatus.FAILED]: 'text-red-500'
};

const StatusMessages = {
  [PaymentStatus.SUCCESS]: 'Thank you for your purchase. Your payment has been processed successfully.',
  [PaymentStatus.PENDING]: 'Your payment is being processed. We will notify you once it is complete.',
  [PaymentStatus.FAILED]: 'There was an issue processing your payment. Please try again or contact support.'
};

const StatusTitles = {
  [PaymentStatus.SUCCESS]: 'Payment Successful!',
  [PaymentStatus.PENDING]: 'Payment Processing',
  [PaymentStatus.FAILED]: 'Payment Failed'
};

const PaymentSuccessPage = ({
  status = PaymentStatus.SUCCESS,
  orderDetails = null,
  customMessage = '',
  nextStepLink = '/generate-tracking',
  nextStepText = 'Generate Tracking Number',
  showNextStep = true,
  gradientStart = 'from-blue-900',
  gradientEnd = 'to-blue-500'
}) => {
  const StatusIcon = StatusIcons[status];
  const statusColor = StatusColors[status];
  const message = customMessage || StatusMessages[status];
  const title = StatusTitles[status];

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-r ${gradientStart} ${gradientEnd}`}>
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full m-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {title}
        </h1>
        
        <div className="flex justify-center mb-6">
          <StatusIcon className={`w-20 h-20 ${statusColor}`} />
        </div>

        <p className="text-center text-gray-600 mb-8">
          {message}
        </p>

        {orderDetails && (
          <div className="mb-8 border rounded-lg p-4 bg-gray-50">
            <h2 className="text-lg font-semibold mb-2">Order Details</h2>
            <div className="space-y-2">
              {Object.entries(orderDetails).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-gray-600">{key}:</span>
                  <span className="text-gray-600">{key}:</span>
                  <span className="font-medium">{String(value)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {status === PaymentStatus.FAILED && (
          <Alert variant="destructive" className="mb-6">
            <AlertTitle>Payment Error</AlertTitle>
            <AlertDescription>
              Please check your payment details and try again. If the problem persists,
              contact our support team.
            </AlertDescription>
          </Alert>
        )}

        {showNextStep && status === PaymentStatus.SUCCESS && (
          <div className="text-center">
            <Link
              href={nextStepLink}
              className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-full 
                         transition duration-300 ease-in-out transform hover:scale-105 inline-block"
            >
              {nextStepText}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccessPage;