import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function CategoryProduct() {
  const [categoryProducts, setcategoryProducts] = useState({
    category: {},
    products: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/product/productByCategory/${params.categoryId}`);
        const data = await res.json();
        if (res.ok) {
          setcategoryProducts(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProduct();
  }, [params.categoryId]);

  const handleProductPage = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="max-w-6xl mx-auto p-3 min-h-screen">
      <h1 className="text-3xl font-semibold border-b pb-4 mt-3">
        {categoryProducts.category.name}
      </h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6 justify-items-center">
        {categoryProducts.products.map((product) => (
          <div
            className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[250px] cursor-pointer"
            onClick={() => handleProductPage(product._id)}
            key={product._id}
          >
            <img
              src={product.imageUrls[0]}
              alt=""
              className="h-[160px] sm:h-[230px] w-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-3 flex flex-col gap-2 w-full mt-3">
              <h3 className="text-lg font-semibold text-slate-700 line-clamp-1">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {product.description}
              </p>
              {product.offer ? (
                <div className="flex items-center gap-2">
                  <p className="text-red-600 line-through text-sm">
                    ${product.regularPrice.toLocaleString('en-US')}
                  </p>
                  <p className="text-green-600 font-semibold">
                    ${product.discountPrice.toLocaleString('en-US')}
                  </p>
                </div>
              ) : (
                <p className="font-semibold">
                  ${product.regularPrice.toLocaleString('en-US')}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
