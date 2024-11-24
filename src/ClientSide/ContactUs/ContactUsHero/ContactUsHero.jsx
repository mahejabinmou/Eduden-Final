const ContactUsHero = () => {
  return (
    <div className="relative xl:mt-[50px] lg:mt-[40px] mt-[10px]">
      <div
        style={{
          backgroundImage: `url("https://i.ibb.co.com/zb910bd/Bg.webp")`,
        }}
        className="bg-no-repeat  bg-cover w-full  md:h-[400px] 2xl:h-[600px]
              h-[300px] flex justify-center items-center"
      ></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto max-w-[670px]">
        <h1 className="BannerHead text-[#FFFFFF] pb-[25px] text-center">
          Archives: Contact Us
        </h1>
        <p className="text-[#FFFFFF]/[.8] BannerPara pb-[35px]">
          Home &gt; Contact Us
        </p>
      </div>
    </div>
  );
};

export default ContactUsHero;
