const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Made with ❤️</p>
        <p>|</p>
        <p>Thanks for visiting!</p>
      </div>

      <div className="flex gap-3 ">
        <div className="social-icon">
          <a href="https://github.com/ChaitanyaBhake" target="_blank" className="flex justify-center items-center">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/chaitanya-bhake/" target="_blank" className="flex justify-center items-center">
            <img
              src="/assets/linkedin-1-svgrepo-com.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
      </div>

      <p className="text-white-500">
        © 2024 Chaitanya Bhake
      </p>
    </section>
  );
};

export default Footer;
