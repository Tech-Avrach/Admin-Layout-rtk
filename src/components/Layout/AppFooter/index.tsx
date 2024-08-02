

const Footer = () => {
  return (
    <footer className="bg-component text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Brand Slogan */}
        <div className="col-span-1 flex flex-col items-start">
          <div className="mb-4">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-2.83 0-5.51-1.04-7.62-2.93a.998.998 0 01.37-1.63c.55-.15 1.1-.32 1.63-.52.34-.13.69-.26 1.03-.4a.997.997 0 011.24.31c.3.39.71.67 1.15.81 1.13.35 2.36.54 3.6.54s2.47-.18 3.6-.54a.997.997 0 011.15-.81c.55.19 1.08.39 1.61.61.35.14.7.29 1.04.45a.997.997 0 01.37 1.63c-2.12 1.89-4.79 2.93-7.62 2.93zM9.2 14.8c.2.2.51.2.71 0L12 12.71l2.09 2.09c.2.2.51.2.71 0 .2-.2.2-.51 0-.71l-2.09-2.09 2.09-2.09c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0L12 11.29l-2.09-2.09c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71L11.29 12l-2.09 2.09c-.19.2-.19.51.01.71z" fill="currentColor"/>
            </svg>
          </div>
          <p className="text-sm">Making the world a better place through constructing elegant hierarchies.</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Solutions Links */}
        <div className="col-span-1">
          <h3 className="text-lg text-white font-semibold mb-4">Solutions</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Marketing</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Analytics</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Commerce</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Insights</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="col-span-1">
          <h3 className="text-lg text-white font-semibold mb-4">Support</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Pricing</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Documentation</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Guides</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">API Status</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="col-span-1">
          <h3 className="text-lg text-white font-semibold mb-4">Company</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Jobs</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Press</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Partners</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="col-span-1">
          <h3 className="text-lg text-white font-semibold mb-4">Legal</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Claim</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Privacy</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Terms</a></li>
          </ul>
        </div>
      </div>

      {/* Legal Information */}
      <div className='mt-8 text-center text-gray-500 border-t-2 border-gray-700'>
        <p>&copy; {new Date().getFullYear()} Your Company, Inc. All rights reserved.</p>
      </div>

      <div className="mt-8">
       
      </div>
    </footer>
  );
};

export default Footer;
