import React from 'react';

const faqData = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit cards, debit cards, and secure online payments. Cash on delivery may also be available in select regions."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, you will receive a tracking number via email. You can track your order status on our website using this number."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy on most items. Simply initiate a return through your account or contact our support team."
  },
  {
    question: "Are all products covered under warranty?",
    answer: "Many products come with a manufacturer’s warranty. Please check the product page for specific warranty information."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to selected countries. International shipping fees and delivery times will vary based on the destination."
  },
  {
    question: "Can I cancel my order after placing it?",
    answer: "You can cancel your order within 2 hours of placing it by visiting the ‘My Orders’ section in your account."
  },
  {
    question: "How can I apply a discount code?",
    answer: "Discount codes can be applied during the checkout process. Enter the code in the provided field, and the discount will be reflected in your total."
  },
  {
    question: "Do you offer gift wrapping services?",
    answer: "Yes, we offer gift wrapping for select items. Choose the option at checkout to add gift wrap to your order."
  }
];

const FAQ = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-2xl text-center font-semibold text-gray-800 lg:text-3xl dark:text-white">Frequently Asked Questions</h1>
        <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {faqData.map((faq, index) => (
            <div key={index}>
              <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">{faq.question}</h1>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
