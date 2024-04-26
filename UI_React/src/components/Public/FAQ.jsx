import React from 'react';
import { Link } from 'react-router-dom';
const FAQ = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
      <p className="text-gray-700 mb-8">
        Find answers to common questions about our courses, teaching methods, and payment process.
      </p>
      <div className="accordion space-y-4">
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="cursor-pointer font-bold text-gray-900">How do I enroll?</summary>
          <p className="text-gray-700">
            To enroll in our courses, simply visit our website, choose the course you're interested in, and follow the instructions to complete the enrollment process. You can also contact our support team for assistance.
          </p>
        </details>
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="cursor-pointer font-bold text-gray-900">What are the course fees?</summary>
          <p className="text-gray-700">
            The course fees vary depending on the level and duration of the course. Please visit our website or contact our support team for detailed information on the fees.
          </p>
        </details>
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="cursor-pointer font-bold text-gray-900">How can I make a payment?</summary>
          <p className="text-gray-700">
            We offer multiple payment options, including credit/debit card, net banking, and digital wallets. During the enrollment process, you will be guided to choose your preferred payment method.
          </p>
        </details>
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="cursor-pointer font-bold text-gray-900">Is financial aid available?</summary>
          <p className="text-gray-700">
            Yes, we offer financial aid for eligible students. To apply for financial aid, please visit our website and follow the instructions provided on the financial aid page.
          </p>
        </details>
        <details className="border border-gray-200 rounded-lg p-4">
          <summary className="cursor-pointer font-bold text-gray-900">Can I get a refund?</summary>
          <p className="text-gray-700">
            Refund policies may vary depending on the course. Please refer to our refund policy page on our website or contact our support team for more information.
          </p>
        </details>
      </div>
      <div className="text-center mt-8">
        <p>Still have questions?</p>
        <p>Contact us for further assistance.</p>
        <Link to="/contact"><button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-blue-700">
          Contact
        </button></Link>
      </div>
    </div>
  );
};

export default FAQ;
