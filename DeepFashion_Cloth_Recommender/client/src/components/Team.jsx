export const Team = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Customers Say</h2>
        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
          <div>
            <img
              className="object-cover w-24 h-24 rounded-full shadow"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Customer"
            />
            <div className="flex flex-col justify-center mt-2">
              <p className="text-lg font-bold">Liam Smith</p>
              <p className="mb-4 text-xs text-gray-800">Satisfied Customer</p>
              <p className="text-sm tracking-wide text-gray-800">
                "Trendy Goods products are exceptional! Quality is unmatched, and
                I always receive my orders on time. I’ve been shopping here for a
                year, and every purchase has been a win."
              </p>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-24 h-24 rounded-full shadow"
              src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Customer"
            />
            <div className="flex flex-col justify-center mt-2">
              <p className="text-lg font-bold">Sophia Williams</p>
              <p className="mb-4 text-xs text-gray-800">Loyal Customer</p>
              <p className="text-sm tracking-wide text-gray-800">
                "Amazing variety and top-notch products! Trendy Goods always
                exceeds expectations with their stylish, durable, and affordable
                items. Highly recommend to everyone."
              </p>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-24 h-24 rounded-full shadow"
              src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Customer"
            />
            <div className="flex flex-col justify-center mt-2">
              <p className="text-lg font-bold">Olivia Wilson</p>
              <p className="mb-4 text-xs text-gray-800">Verified Buyer</p>
              <p className="text-sm tracking-wide text-gray-800">
                "Shopping with Trendy Goods has been a fantastic experience. The
                customer service is incredibly helpful, and their products are
                both trendy and long-lasting. Five stars!"
              </p>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-24 h-24 rounded-full shadow"
              src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Customer"
            />
            <div className="flex flex-col justify-center mt-2">
              <p className="text-lg font-bold">James Lopez</p>
              <p className="mb-4 text-xs text-gray-800">Frequent Shopper</p>
              <p className="text-sm tracking-wide text-gray-800">
                "Trendy Goods consistently delivers on quality and style. Their
                products are exactly as described, and their designs are unique. I
                recommend them to anyone looking for great value!"
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  