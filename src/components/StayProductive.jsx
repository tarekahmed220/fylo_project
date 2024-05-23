function StayProductive() {
  return (
    <div>
      {/* todo in small screen make flex to center the content */}
      <section className="my-[150px] flex justify-center items-center text-center md:text-start ">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center text-white">
          <div>
            <img
              src="/images/illustration-stay-productive.png"
              alt="Stay-productive-img"
            />
          </div>
          <div className="py-[15px] px-[15px]">
            <h1 className="text-4xl sm:leading-[40px] md:text-6xl md:leading-[70px] mb-[30px] md:mb-[40px] ">
              Stay productive, <br /> wherever you are
            </h1>
            <p className="my-[10px]">
              Never let location be an issue when accessing your files. Fylo has
              you covered
              <br /> for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live
              <br /> collaboration. No email attachments required.
            </p>
            <div className="my-[20px] w-fit mx-auto md:mx-0">
              <a
                href="/"
                className="flex gap-[5px] border-b-[2px] border-btnColor pb-[5px]"
              >
                <h2 className="">See how Fylo works</h2>
                <img
                  src="/images/icon-arrow.svg"
                  alt="arrow-img"
                  className="object-contain w-[20px] animate-[iconMove_1s_ease-in-out_infinite]"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StayProductive;
