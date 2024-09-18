import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const Subscribe = () => {
  const plans = [
    {
      name: 'Intro',
      price: '$9.99',
      description: 'Perfect for individuals and small projects',
      features: [
        { name: '5GB Storage', included: true },
        { name: 'Basic Support', included: true },
        { name: '1 Integration', included: true },
        { name: '1 User', included: true },
        { name: 'Limited Analytics', included: true },
        { name: 'Basic Reporting', included: true },
        { name: 'Email Support', included: true },
        { name: 'Community Access', included: true },
        { name: 'API Access', included: false },
        { name: 'Custom Domain', included: false },
      ],
    },
    {
      name: 'Base',
      price: '$19.99',
      description: 'Great for growing businesses and teams',
      features: [
        { name: '20GB Storage', included: true },
        { name: 'Priority Support', included: true },
        { name: '3 Integrations', included: true },
        { name: '5 Users', included: true },
        { name: 'Advanced Analytics', included: true },
        { name: 'Custom Reporting', included: true },
        { name: '24/7 Email & Chat Support', included: true },
        { name: 'Community Access', included: true },
        { name: 'API Access', included: true },
        { name: 'Custom Domain', included: false },
      ],
    },
    {
      name: 'Popular',
      price: '$29.99',
      description: 'Ideal for medium-sized businesses',
      features: [
        { name: '50GB Storage', included: true },
        { name: 'Premium Support', included: true },
        { name: '10 Integrations', included: true },
        { name: '20 Users', included: true },
        { name: 'Advanced Analytics', included: true },
        { name: 'Custom Reporting', included: true },
        { name: '24/7 Priority Support', included: true },
        { name: 'Community Access', included: true },
        { name: 'API Access', included: true },
        { name: 'Custom Domain', included: true },
      ],
    },
    {
      name: 'Premium',
      price: '$49.99',
      description: 'For large enterprises and high-volume users',
      features: [
        { name: 'Unlimited Storage', included: true },
        { name: 'White-glove Support', included: true },
        { name: 'Unlimited Integrations', included: true },
        { name: 'Unlimited Users', included: true },
        { name: 'Advanced Analytics', included: true },
        { name: 'Custom Reporting', included: true },
        { name: '24/7 Dedicated Support', included: true },
        { name: 'Community Access', included: true },
        { name: 'API Access', included: true },
        { name: 'Custom Domain', included: true },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get an attractive price here
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your needs. Upgrade or downgrade at any time.
            <br />
            Find the ideal balance of features and affordability.
          </p>
        </div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className="ml-1 text-xl font-semibold">/month</span>
                </p>
                <p className="mt-6 text-gray-500">{plan.description}</p>

                <ul role="list" className="mt-6 space-y-6">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex">
                      <span className="flex-shrink-0">
                        {feature.included ? (
                          <FaCheck className="h-6 w-6 text-green-500" aria-hidden="true" />
                        ) : (
                          <FaTimes className="h-6 w-6 text-red-500" aria-hidden="true" />
                        )}
                      </span>
                      <span className="ml-3 text-gray-500">{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className="mt-8 block w-full bg-indigo-600 border border-transparent rounded-md py-3 px-6 text-center font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
