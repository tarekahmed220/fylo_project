function Landing() {
  return (
    <>
      <section className=" element-center text-white flex-col ">
        <div className="container ">
          <div className="element-center flex-col sm:mt-[170px] mt-[220px]  ">
            <div>
              <a href="/">
                <img
                  src="../../images/illustration-intro.png"
                  className="w-full"
                />
              </a>
            </div>
            <div className="text-center element-center flex-col mt-[30px]   ">
              <h1 className="font-semibold text-[35px]">
                ALI your files in one secure location, accessible anywhere.
              </h1>
              <p className=" mt-[30px]  text-[20px] sm:w-[750px]">
                Fylo stores all your most important files in one secure
                location. Access them wherever you need, share and collaborate
                with friends family, and co-workers.
              </p>
              <a
                href="/"
                className="btn w-[220px] h-[50px] sm:h-[60px] sm:w-[280px] element-center mt-[30px] font-semibold text-[15px] sm:text-[18px]"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="h-[170px] sm:h-[300px]">
        <img
          src="../../images/bg-curvy-desktop.svg"
          alt="desktop-img"
          className="w-full h-full "
        />
      </div>
    </>
  );
}

export default Landing;
