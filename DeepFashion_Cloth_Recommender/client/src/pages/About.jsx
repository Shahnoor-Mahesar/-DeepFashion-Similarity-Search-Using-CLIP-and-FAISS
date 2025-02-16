
export const About = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Welcome to Trendy Goods
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">Our Story</span>
            </span>{' '}
            Where Quality Meets Style
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            At Trendy Goods, we believe in providing our customers with the best quality products that reflect their style and personality. From fashion to home decor, we curate a selection that caters to every taste.
          </p>
        </div>
        <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <svg className="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Quality Products</h6>
            <p className="text-sm text-gray-900">
              We source only the finest products to ensure that you receive the best value for your money.
            </p>
          </div>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <svg className="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Customer Satisfaction</h6>
            <p className="text-sm text-gray-900">
              Our customers are at the heart of everything we do. We strive to provide an exceptional shopping experience.
            </p>
          </div>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <svg className="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Sustainable Practices</h6>
            <p className="text-sm text-gray-900">
              We are committed to sustainability and aim to reduce our environmental impact through responsible sourcing and packaging.
            </p>
          </div>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <svg className="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Community Engagement</h6>
            <p className="text-sm text-gray-900">
              We actively engage with our local community through various initiatives and partnerships to give back.
            </p>
          </div>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <svg className="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Innovative Solutions</h6>
            <p className="text-sm text-gray-900">
              Our team is dedicated to finding innovative solutions to enhance your shopping experience and meet your needs.
            </p>
          </div>
          <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <svg className="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Diverse Selection</h6>
            <p className="text-sm text-gray-900">
              From clothing to home decor, we offer a wide range of products that cater to every preference and lifestyle.
            </p>
          </div>
        </div>
        <div className="text-center">
         <button className="px-8 rounded-md hover:bg-neutral-700 py-3 bg-black text-white">Signup</button>
        </div>
      </div>
    );
  };
  