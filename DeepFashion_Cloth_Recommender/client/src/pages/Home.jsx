import { useEffect, useState } from 'react';
import banner from '../assets/images/banner.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import girlbanner from "../assets/images/girlbanner.png"
import FAQ from '../components/FAQ';
import ContactUs from '../components/ContactUs';
import { Team } from '../components/Team';

export default function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const res = await fetch('/api/product/getProducts');
        const data = await res.json();
        if (res.ok) {
          setProducts(data);
        }
      };
      fetchProducts();
    } catch (error) {
      console.log(error.message);
    }
  }, [setProducts]);

  const getRandomOfferProducts = () => {
    const offerProducts = products.filter((product) => product.offer);
    const shuffledProducts = offerProducts.sort(() => Math.random() - 0.5);
    return shuffledProducts.slice(0, 8);
  };

  const getRandomTrendingProducts = () => {
    const trendingProducts = products.filter((product) => product.trending);
    const shuffledProducts = trendingProducts.sort(() => Math.random() - 0.5);
    return shuffledProducts.slice(0, 8);
  };

  const handleProductPage = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div >
       <div className="relative bg-gray-200 h-[500px] w-full flex flex-col md:flex-row items-center md:items-start justify-center">
      <div className="hidden md:block md:w-1/2 h-full ">
        <img src={girlbanner} alt="Girl Banner" className="h-full w-full object-contain " />
      </div>
    
      <div className="flex flex-col items-center md:mt-24 md:items-start text-center md:text-left md:w-1/2 p-8">
        <p className="text-3xl font-bold text-gray-800 mb-4">
          Discover Endless Products.
          <br />
          All in One Store
        </p>
        <Link to="/products">
          <button className="bg-black text-white font-semibold px-5 py-2 rounded-md mt-6 hover:bg-gray-800">
            View Products
          </button>
        </Link>
      </div>
    </div>

      <div className="max-w-6xl mx-auto p-4">
        <div className="text-center mt-10">
          <h6 className="uppercase font-bold text-sm">Top sale on this month</h6>
          <h1 className="text-3xl font-semibold mt-2 text-[#3d52a0] font-serif">
            Trending Products
          </h1>
          <p className="text-sm text-slate-500 mt-3">
            Unlock the latest trends.<br /> Elevate your lifestyle with our top-selling products of the month.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {getRandomTrendingProducts().map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg mx-auto w-full sm:w-auto"
              onClick={() => handleProductPage(product._id)}
            >
              <img
                src={product.imageUrls[0]}
                alt=""
                className="h-[200px] sm:h-[250px] w-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-3 flex flex-col gap-2 w-full mt-3">
                <h3 className="text-sm sm:text-lg font-semibold text-slate-700 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                  {product.description}
                </p>
                {product.offer ? (
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
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

        <div className="text-center mt-16 border-t pt-10">
          <h6 className="uppercase font-bold text-sm">Unbeatable deals await</h6>
          <h1 className="text-3xl font-semibold mt-2 text-[#3d52a0] font-serif">
            Offer Products
          </h1>
          <p className="text-sm text-slate-500 mt-3">
            Dive into our limited-time offers and elevate your shopping experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {getRandomOfferProducts().map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg mx-auto w-full sm:w-auto"
              onClick={() => handleProductPage(product._id)}
            >
              <img
                src={product.imageUrls[0]}
                alt=""
                className="h-[200px] sm:h-[250px] w-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-3 flex flex-col gap-2 w-full mt-3">
                <h3 className="text-sm sm:text-lg font-semibold text-slate-700 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                  {product.description}
                </p>
                {product.offer ? (
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
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

      <FAQ/>
      <ContactUs/>
      <Team/>
    </div>
  );
}
