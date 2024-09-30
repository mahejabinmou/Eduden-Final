const CourseDetailsHero = () => {
  return (
    <div className="  ">
      <div className="  ">
        <div className="relative">
          <div
            style={{
              backgroundImage: `url("https://i.ibb.co.com/8DWrcYw/bg-66f7a99a0a4d3.webp")`,
            }}
            className="bg-no-repeat bg-center bg-cover w-full h-[500px] flex justify-center items-center"
          ></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto max-w-[670px]">
            <h1 className="aboutPageHero text-[#FFFFFF] pb-[25px] text-center">
              Archives: Course details
            </h1>
            <p className="text-[#FFFFFF]/[.8] joinClanSubPara pb-[35px]">
              Home > Courses > Course details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsHero;
