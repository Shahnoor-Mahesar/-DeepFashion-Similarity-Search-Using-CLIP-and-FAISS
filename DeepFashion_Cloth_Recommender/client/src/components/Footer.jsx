import { Link } from 'react-router-dom';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { Footer } from 'flowbite-react';

export default function FooterCon() {
  return (
    <Footer container className="border-t-8 border-[#3d52a0] bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row  justify-between items-start gap-8 text-center lg:text-left">
          
          {/* Brand Section */}
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
            <Link to="/" className="text-xl font-semibold">
              <span className="font-bold text-[#262626]">TRENDY GOODS</span>
            </Link>
            <p className="text-slate-500 mt-3 leading-relaxed">
              Discover your unique style with Trendy Goods – where fashion elevates your wardrobe with our latest collections.
            </p>
          </div>
          
          {/* Links Section */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-4 lg:mt-0">
            
            {/* About Links */}
            <div className="flex flex-col items-center lg:items-start">
              <Footer.Title title="About" className="text-lg font-semibold mb-2" />
              <Footer.LinkGroup col>
                <Footer.Link>Muqaddais Ghani</Footer.Link>
                <Footer.Link>muqaddasghannissp@gmail.com</Footer.Link>
              </Footer.LinkGroup>
            </div>
            
            {/* Follow Links */}
            <div className="flex flex-col items-center lg:ml-16 lg:items-start">
              <Footer.Title title="Follow" className="text-lg font-semibold mb-2" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://facebook.com">Facebook</Footer.Link>
                <Footer.Link  href="https://github.com">Github</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        <Footer.Divider className="mt-8" />

        {/* Footer Bottom Section */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between mt-6 text-center">
          <Footer.Copyright
            href="#"
            by="TRENDY GOODS"
            year={new Date().getFullYear()}
            className="text-sm text-slate-500"
          />
          <div className="flex justify-center gap-8 mt-4 sm:mt-0">
            <Footer.Icon
              href="https://facebook.com"
              icon={BsFacebook}
              className="text-slate-700 hover:text-blue-600 transition duration-200"
            />
            <Footer.Icon
              href="https://github.com"
              icon={BsGithub}
              className="text-slate-700 hover:text-gray-600 transition duration-200"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
