import React, { useState } from "react";

const Faqs = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question:
        "What is your comprehensive return policy, how does the full refund process work, and what are the specific conditions for returning items?",
      answer:
        "We offer a comprehensive 30-day money-back guarantee on all products purchased through our platform. If you're not completely satisfied with your purchase for any reason, you can initiate a return within 30 days of receipt for a full refund, no questions asked. The refund process typically takes 5-7 business days once we receive the returned item, and the funds will be credited back to your original payment method. Please ensure that all items are returned in their original packaging with all tags and accessories included to avoid any processing delays.",
    },
    {
      id: 2,
      question:
        "What are the estimated shipping times, what delivery options are available for my order, and how can I choose the best shipping method for my needs?",
      answer:
        "Standard shipping typically takes 3-5 business days for delivery within the continental United States. For customers who need their items more urgently, we offer express shipping with 1-2 business day delivery at checkout for an additional fee. We also provide priority overnight shipping for time-sensitive orders, which guarantees next-business-day delivery if ordered before 2 PM EST. All orders are processed within 24 hours of placement, and you'll receive a confirmation email with tracking information once your order has been dispatched from our warehouse.",
    },
    {
      id: 3,
      question:
        "Do you provide international shipping services to countries outside the United States, what are the delivery timelines for different global regions, and what additional costs or customs fees should I expect?",
      answer:
        "Yes, we proudly offer international shipping to over 50 countries worldwide including Canada, United Kingdom, Australia, Germany, France, Japan, and many more European and Asian destinations. International delivery usually takes 7-14 business days depending on the destination country and customs clearance procedures in the receiving nation. Please note that international orders may be subject to import duties, taxes, and customs fees that are the responsibility of the recipient. We recommend checking with your local customs office for estimated charges before placing your international order.",
    },
    {
      id: 4,
      question:
        "How can I track my order status in real-time, what tracking information will I receive, and how can I monitor the delivery progress from dispatch to arrival?",
      answer:
        "Once your order has been shipped from our facility, you'll receive a confirmation email containing a unique tracking number specifically assigned to your package. You can use this tracking number to monitor your package's journey on our website through our integrated tracking portal, or directly through the carrier's official tracking system. The tracking information is updated in real-time, showing you the current location, estimated delivery date, and any potential delays or exceptions. We also send automated SMS and email notifications at key milestones, including when your order is out for delivery.",
    },
    {
      id: 5,
      question:
        "What secure payment methods and financial transaction options do you accept, which digital wallets are supported, and what security measures are in place to protect my payment information?",
      answer:
        "We accept all major credit cards including Visa, Mastercard, American Express, and Discover cards for seamless payment processing. We also offer secure digital payment options like PayPal, Apple Pay, and Google Pay for your convenience and enhanced security. Additionally, we support various local payment methods depending on your region, including Klarna and Afterpay for buy-now-pay-later options. All transactions are encrypted using industry-standard SSL technology to ensure your financial information remains completely secure and protected from unauthorized access.",
    },
    {
      id: 6,
      question:
        "What kind of bulk order discounts and wholesale pricing plans do you offer for businesses, organizations, and large-scale events, and how can I request a custom quote?",
      answer:
        "Yes, we offer attractive volume-based discounts and special wholesale pricing plans for bulk orders. Whether you're purchasing for your business, organization, or large-scale event, our dedicated sales team will work with you to create a customized pricing plan that fits your specific needs and budget requirements. Bulk discounts typically start at 10-15% off for orders over 50 units, with increasing discount tiers available for larger quantities. We also offer white-labeling options, custom packaging solutions, and dedicated account management for our wholesale partners.",
    },
    {
      id: 7,
      question:
        "What are the various channels and contact methods available to reach your customer support team, what are their operating hours, and what is the average response time for each communication channel?",
      answer:
        "Our dedicated customer support team is available 24 hours a day, 7 days a week to assist you with any inquiries, concerns, or issues you may have. You can reach us via email at support@company.com for detailed inquiries, through our live chat feature on our website for immediate assistance, or by phone at 1-800-123-4567 for urgent matters requiring voice communication. We also maintain active social media presence on Twitter, Facebook, and Instagram where you can send us direct messages. Our average response time is under 2 hours for email, under 2 minutes for live chat, and immediate for phone calls during business hours.",
    },
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="w-auto h-auto min-h-[968px] gap-[32px] py-[48px] bg-white px-4 sm:px-8 lg:px-16">
      <div className="mx-4 sm:mx-6 lg:mx-10">
        <div className="flex items-center justify-center flex-col space-y-5">
          <h1 className="text-[#74BF1A] text-[28px] sm:text-[32px] lg:text-[40px] font-semibold text-center">
            FAQs
          </h1>
          <p className="text-gray-500 text-sm sm:text-base lg:text-base text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {faqs.map((faq) => (
          <div key={faq.id}>
            <div className="mt-5 w-full max-w-[1237px] h-auto mx-auto">
              <div
                className="flex items-center gap-3 sm:gap-5 justify-center h-auto min-h-[72px] sm:min-h-[92px] text-[#79767D] border border-b-[#605D64] border-t-0 border-l-0 border-r-0 w-full max-w-[1150px] cursor-pointer transition-colors py-3"
                onClick={() => toggleFaq(faq.id)}
              >
                {/* ID Box */}
                <div className="w-[36px] sm:w-[48px] h-[36px] sm:h-[48px] rounded-[6px] flex items-center justify-center border-2 border-[#938F96] flex-shrink-0">
                  <div className="text-[18px] sm:text-[25px] font-semibold">
                    {faq.id}
                  </div>
                </div>

                {/* Question */}
                <div className="flex-1 p-2">
                  <p className="font-medium text-[#322F35] text-sm sm:text-base lg:text-base">
                    {faq.question}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div className="w-[36px] sm:w-[48px] h-[36px] sm:h-[48px] rounded-[6px] flex items-center justify-center flex-shrink-0">
                  <div className="text-[25px] mt-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`size-4 sm:size-5 transition-transform duration-300 ${
                        openFaq === faq.id ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Answer dropdown */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaq === faq.id
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-[50px] sm:pl-[68px] pr-4 py-4 text-gray-600 border-b border-[#605D64]">
                  <p className="text-sm sm:text-base">{faq.answer}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
