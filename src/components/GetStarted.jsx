function GetStarted() {
  return (
    <section
      id="signin"
      className="element-center z-[20] relative bottom-[-100px]"
    >
      <div className="text-white  mx-[60px] bg-[#1c2230] p-[30px] max-w-full w-fit text-center  shadow-[5px_5px_10px_5px_#0b1423]">
        <div className="w-[800px]  max-w-full flex justify-center items-center gap-[30px] flex-col">
          <h1 className="text-3xl md:text-4xl ">Get early access today</h1>
          <p className="w-[600px] max-w-full text-[#dee1e7] ">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <form className="flex justify-center items-center flex-col md:flex-row gap-6 w-full">
            <input
              type="email"
              className=" rounded-[20px] h-[40px] w-full md:w-[70%] px-[15px] border-none outline-none text-black"
            />
            <a href="/">
              <button
                className="rounded-[20px] h-[40px] text-white bg-btnColor p-[20px] flex justify-center items-center "
                type="submit"
              >
                Get Started For Free
              </button>
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
