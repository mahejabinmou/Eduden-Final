import { HiArrowLongRight, HiOutlineMinusSmall } from "react-icons/hi2";
import { IoMdLock } from "react-icons/io";

const PopularCategories = () => {
  return (
    <div className="text-[#FFFFFF] sectionGap">
      <h1 className="joinClanPara mb-[25px]  flex items-center justify-center text-[#A8FF57]">
        <span>
          <HiOutlineMinusSmall />{" "}
        </span>
        Popular Categories{" "}
        <span>
          <HiOutlineMinusSmall />{" "}
        </span>
      </h1>
      <h1 className="joinClanHead mb-[80px] text-center"> Course Catagories</h1>

      <div className="grid md:grid-cols-3  xl:grid-cols-4 items-center gap-[20px]">
        {/* <div className="hover:bg-[#A8FF57B2]/[.7] group transition-all duration-500  h-[405px] rounded-[20px] text-center py-[58px] ">
          <div className="h-[60px] w-[60px]  mx-auto xl:mb-[45px] lg:mb-[20px] mb-[20px] rounded-full bg-white group-hover:bg-[#000000]  flex justify-center items-center">
            <IoMdLock
              size={30}
              className=" group-hover:text-white text-[#000000]  "
            />
          </div>

          <h1 className="mb-[15px] popularCategoryHead group-hover:text-[#000000] ">
            Cyber Security
          </h1>
          <p className="xl:mb-[50px]  lg:mb-[20px] popularCategoryPara px-[10px] group-hover:text-[#000000] transition duration-200">
            Fermentum fusce himenaeos neque condimentum maecenas vitae congue
            iaculis inceptos ullamcorper habitasse
          </p>
          <div className="flex items-center justify-center">
            <HiArrowLongRight
              className=" text-[#FFFFFF] group-hover:text-black transition duration-200"
              size={75}
            />
          </div>
         
        </div> */}

        <div className="hover:bg-[#A8FF57B2]/[.7] group transition-all duration-1000 h-[405px] rounded-[20px] text-center py-[58px]">
          <div className="h-[60px] w-[60px] mx-auto xl:mb-[45px] lg:mb-[20px] mb-[20px] rounded-full bg-white group-hover:bg-[#000000] flex justify-center items-center">
            <IoMdLock
              size={30}
              className="group-hover:text-white text-[#000000] transition duration-1000"
            />
          </div>

          <h1 className="mb-[15px] popularCategoryHead group-hover:text-[#000000]">
            Cyber Security
          </h1>
          <p className="xl:mb-[50px] lg:mb-[20px] popularCategoryPara px-[10px] group-hover:text-[#000000] transition duration-1000">
            Fermentum fusce himenaeos neque condimentum maecenas vitae congue
            iaculis inceptos ullamcorper habitasse
          </p>
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 60"
              className="w-12 h-12 fill-current  group-hover:text-[#000000] text-white"
            >
              <line
                x1="0"
                y1="30"
                x2="170"
                y2="30"
                stroke="currentColor"
                strokeWidth="3"
              />
              <polygon points="170,30 150,20 150,40" fill="currentColor" />
            </svg>
          </div>
        </div>

        <div className="hover:bg-[#A8FF57B2]/[.7] h-[405px] group transition-all duration-1000  rounded-[20px] text-center py-[58px] ">
          <div className="h-[60px] w-[60px] mx-auto xl:mb-[45px] lg:mb-[20px] mb-[20px] rounded-full bg-white group-hover:bg-[#000000]  flex justify-center items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 63 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors  duration-1000 fill-current text-[#000000] group-hover:text-white"
            >
              <path d="M38.313 34.4156H9.75489C7.84038 34.4156 6.29053 32.8658 6.29053 30.9513V3.46435C6.29053 1.54984 7.84038 0 9.75489 0H53.5379C55.4524 0 57.0023 1.54984 57.0023 3.46435V10.8489H54.2673V3.46435C54.2673 3.0541 53.9482 2.73502 53.5379 2.73502H9.75489C9.34464 2.73502 9.02554 3.0541 9.02554 3.46435V30.9513C9.02554 31.3615 9.34464 31.6806 9.75489 31.6806H38.313V34.4156Z" />
              <path d="M38.313 46.8828H3.07687C1.39028 46.86 0 45.4697 0 43.7832V40.1365C0 38.4499 1.39028 37.0596 3.07687 37.0596H38.313V39.7946H3.07687C2.89454 39.7946 2.73501 39.9541 2.73501 40.1365V43.7832C2.73501 43.9655 2.89454 44.125 3.07687 44.125H38.313V46.8828Z" />
              <path d="M59.1674 46.8832H44.4439C42.5522 46.8832 41.0251 45.3561 41.0251 43.4644V16.7752C41.0251 14.8835 42.5522 13.3564 44.4439 13.3564H59.1674C61.0591 13.3564 62.5862 14.8835 62.5862 16.7752V43.4644C62.5862 45.3561 61.0591 46.8832 59.1674 46.8832ZM44.4439 16.1143C44.0792 16.1143 43.7602 16.4105 43.7602 16.798V43.4872C43.7602 43.8519 44.0565 44.171 44.4439 44.171H59.1674C59.5321 44.171 59.8512 43.8747 59.8512 43.4872V16.798C59.8512 16.4333 59.5549 16.1143 59.1674 16.1143H44.4439Z" />
              <path d="M57.3669 3.46436H53.9481V10.8489H57.3669V3.46436Z" />
              <path d="M51.8057 41.2764C52.5861 41.2764 53.2187 40.6437 53.2187 39.8633C53.2187 39.0829 52.5861 38.4502 51.8057 38.4502C51.0252 38.4502 50.3926 39.0829 50.3926 39.8633C50.3926 40.6437 51.0252 41.2764 51.8057 41.2764Z" />
            </svg>
          </div>
          <h1 className="mb-[15px] popularCategoryHead group-hover:text-[#000000] transition duration-200">
            UI/UX Design
          </h1>
          <p className="xl:mb-[50px] lg:mb-[20px] popularCategoryPara px-[10px] group-hover:text-[#000000] transition duration-1000">
            Fermentum fusce himenaeos neque condimentum maecenas vitae congue
            iaculis inceptos ullamcorper habitasse
          </p>
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 60"
              className="w-12 h-12 fill-current  group-hover:text-[#000000] text-white"
            >
              <line
                x1="0"
                y1="30"
                x2="170"
                y2="30"
                stroke="currentColor"
                strokeWidth="3"
              />
              <polygon points="170,30 150,20 150,40" fill="currentColor" />
            </svg>
          </div>
        </div>
        <div className="hover:bg-[#A8FF57B2]/[.7] h-[405px] group transition-all duration-1000 rounded-[20px] text-center py-[58px] ">
          <div className="h-[60px] w-[60px] mx-auto xl:mb-[45px] lg:mb-[20px] mb-[20px] rounded-full bg-white group-hover:bg-[#000000] flex justify-center items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 61 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors  duration-1000 fill-current text-black group-hover:text-white"
            >
              <path
                d="M15.9851 30.2773C15.6427 30.2773 15.2775 30.1404 15.0264 29.8664L0.485474 15.3255L14.7981 1.01291C15.3231 0.487885 16.1905 0.487885 16.7384 1.01291C17.2862 1.53793 17.2634 2.40536 16.7384 2.95322L4.36612 15.3255L16.9667 27.9261C17.4917 28.4511 17.4917 29.3186 16.9667 29.8664C16.6928 30.1404 16.3503 30.2773 16.0079 30.2773H15.9851Z"
                fill="currentColor"
              />
              <path
                d="M45.706 30.2776C45.3636 30.2776 44.9983 30.1407 44.7472 29.8667C44.2222 29.3417 44.2222 28.4743 44.7472 27.9264L57.1196 15.5541L44.519 2.95352C43.994 2.4285 43.994 1.56107 44.519 1.01321C45.044 0.465362 45.9114 0.488189 46.4593 1.01321L61.0002 15.5541L46.6875 29.8667C46.4136 30.1407 46.0713 30.2776 45.7288 30.2776H45.706Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h1 className="mb-[15px] popularCategoryHead group-hover:text-[#000000] transition duration-200">
            Web Development
          </h1>
          <p className="xl:mb-[50px] lg:mb-[20px] popularCategoryPara px-[10px]  group-hover:text-[#000000] transition duration-1000">
            Fermentum fusce himenaeos neque condimentum maecenas vitae congue
            iaculis inceptos ullamcorper habitasse
          </p>
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 60"
              className="w-12 h-12 fill-current  group-hover:text-[#000000] text-white"
            >
              <line
                x1="0"
                y1="30"
                x2="170"
                y2="30"
                stroke="currentColor"
                strokeWidth="3"
              />
              <polygon points="170,30 150,20 150,40" fill="currentColor" />
            </svg>
          </div>
        </div>

        <div className="hover:bg-[#A8FF57B2]/[.7] h-[405px] group rounded-[20px] text-center py-[58px] ">
          <div className="h-[60px] w-[60px] mx-auto xl:mb-[45px] lg:mb-[20px] mb-[20px] rounded-full bg-white group-hover:bg-[#000000] flex justify-center items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 54 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors  duration-1000 fill-current text-black group-hover:text-white"
            >
              <path
                d="M3.87392 14.4694L1.38208 14.1972C1.77994 10.6374 3.39228 7.26611 5.94694 4.69052C8.94132 1.67519 12.9408 0 17.2125 0C20.6467 0 23.8714 1.047 26.5935 3.05722C29.3157 1.047 32.5404 0 35.9746 0C40.2253 0 44.2248 1.65425 47.2402 4.64863C49.8577 7.28705 51.4281 10.5746 51.805 14.1762L49.3132 14.4485C48.9782 11.4122 47.659 8.6272 45.4603 6.42853C42.9266 3.89481 39.5343 2.5128 35.9746 2.5128C32.7917 2.5128 29.8392 3.58072 27.3892 5.61188L26.5935 6.28193L25.7978 5.61188C23.3688 3.58072 20.3954 2.5128 17.2125 2.5128C13.6318 2.5128 10.2605 3.91574 7.74773 6.44946C5.59093 8.62719 4.22985 11.4541 3.89481 14.4485L3.87392 14.4694Z"
                fill="currentColor"
              />
              <path
                d="M20.7304 34.9481C20.4163 34.9481 20.0813 34.8225 19.8509 34.5712L9.21355 23.9129C7.07769 21.7979 5.90503 18.9711 5.90503 15.9558C5.90503 12.9195 7.07771 10.0717 9.23451 7.93583C11.3704 5.79997 14.2181 4.60641 17.2335 4.60641C20.2488 4.60641 23.1385 5.82091 25.2325 7.93583L26.5935 9.2969L27.9756 7.91487C30.1114 5.77901 32.9593 4.58545 35.9955 4.58545C39.0109 4.58545 41.8587 5.77901 43.9736 7.91487C48.3919 12.3332 48.3919 19.5155 43.9736 23.9338L33.3153 34.5712C32.8127 35.0528 32.017 35.0528 31.5354 34.5712C31.0537 34.0896 31.0537 33.2939 31.5354 32.7913L42.1937 22.1539C45.6278 18.7198 45.6278 13.1289 42.1937 9.69476C40.5395 8.04052 38.3408 7.11918 35.9746 7.11918C33.6293 7.11918 31.4097 8.04052 29.7345 9.69476L26.5935 12.8357L23.4526 9.69476C21.8193 8.04052 19.5578 7.09822 17.2335 7.09822C14.9091 7.09822 12.6686 8.01959 10.9934 9.67383C9.31826 11.349 8.39689 13.5686 8.41783 15.9139C8.41783 18.2591 9.3392 20.4578 10.9934 22.1121L21.6308 32.7704C22.1124 33.252 22.1124 34.0477 21.6308 34.5503C21.3795 34.8015 21.0655 34.9272 20.7514 34.9272L20.7304 34.9481Z"
                fill="currentColor"
              />
              <path
                d="M32.2473 51.2188H20.9607V49.9624C20.9607 46.1095 15.4955 43.9946 15.4536 43.9736L14.1134 43.4711L26.5935 20.0186L39.0736 43.4711L37.7335 43.9736C37.7335 43.9736 32.2473 46.1095 32.2473 49.9624V51.2188ZM23.3479 48.706H29.8392C30.4883 45.2929 33.713 43.1779 35.5557 42.2147L26.5935 25.3791L17.6313 42.2147C19.474 43.1779 22.6987 45.2929 23.3479 48.706Z"
                fill="currentColor"
              />
              <path
                d="M34.0061 51.2188H19.1598C18.4688 51.2188 17.9034 50.6534 17.9034 49.9624C17.9034 49.2714 18.4688 48.7061 19.1598 48.7061H34.0061C34.6971 48.7061 35.2625 49.2714 35.2625 49.9624C35.2625 50.6534 34.6971 51.2188 34.0061 51.2188Z"
                fill="currentColor"
              />
              <path
                d="M32.2682 59.0293H20.9188V49.9415C20.9188 49.2504 21.4842 48.6851 22.1752 48.6851C22.8662 48.6851 23.4316 49.2504 23.4316 49.9415V56.5165H29.7554V49.9415C29.7554 49.2504 30.3208 48.6851 31.0118 48.6851C31.7028 48.6851 32.2682 49.2504 32.2682 49.9415V59.0293Z"
                fill="currentColor"
              />
              <path
                d="M5.08835 18.5732H0V13.4849H5.08835V18.5732ZM1.67516 16.8981H3.41319V15.1601H1.67516V16.8981Z"
                fill="currentColor"
              />
              <path
                d="M53.187 18.5732H48.0986V13.4849H53.187V18.5732ZM49.7738 16.8981H51.5118V15.1601H49.7738V16.8981Z"
                fill="currentColor"
              />
              <path
                d="M27.8289 22.6987H25.3162V36.9587H27.8289V22.6987Z"
                fill="currentColor"
              />
              <path
                d="M26.5934 43.3666C24.4785 43.3666 22.752 41.64 22.752 39.5251C22.752 37.4102 24.4785 35.6836 26.5934 35.6836C28.7083 35.6836 30.4349 37.4102 30.4349 39.5251C30.4349 41.64 28.7083 43.3666 26.5934 43.3666ZM26.5934 38.1965C25.7176 38.1965 25.0112 38.903 25.0112 39.7788C25.0112 40.6547 25.7176 41.3611 26.5934 41.3611C27.4692 41.3611 28.1757 40.6547 28.1757 39.7788C28.1757 38.903 27.4692 38.1965 26.5934 38.1965Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h1 className="mb-[15px] popularCategoryHead group-hover:text-[#000000] transition duration-200">
            Graphic Design
          </h1>
          <p className="xl:mb-[50px] lg:mb-[20px] popularCategoryPara px-[10px] group-hover:text-[#000000] transition duration-1000">
            Fermentum fusce himenaeos neque condimentum maecenas vitae congue
            iaculis inceptos ullamcorper habitasse
          </p>
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 60"
              className="w-12 h-12 fill-current  group-hover:text-[#000000] text-white"
            >
              <line
                x1="0"
                y1="30"
                x2="170"
                y2="30"
                stroke="currentColor"
                strokeWidth="3"
              />
              <polygon points="170,30 150,20 150,40" fill="currentColor" />
            </svg>
          </div>
        </div>

        <div className="hover:bg-[#A8FF57B2]/[.7] h-[405px] group transition duration-1000 rounded-[20px] text-center py-[58px] ">
          <div className="h-[60px] w-[60px] mx-auto xl:mb-[45px] lg:mb-[20px] mb-[20px] rounded-full bg-white group-hover:bg-[#000000] flex justify-center items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 37 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:text-white text-[#000000] fill-current transition-colors  duration-1000"
            >
              <path
                d="M32.7029 60.9172H4.04637C1.81311 60.9172 0 59.104 0 56.8708V4.04641C0 1.81315 1.81311 0 4.04637 0H32.7029C34.9362 0 36.7493 1.81315 36.7493 4.04641V56.8708C36.7493 59.104 34.9362 60.9172 32.7029 60.9172ZM4.04637 2.63127C3.27247 2.63127 2.65341 3.25039 2.65341 4.02429V56.8486C2.65341 57.6225 3.27247 58.2417 4.04637 58.2417H32.7029C33.4768 58.2417 34.096 57.6225 34.096 56.8486V4.02429C34.096 3.25039 33.4768 2.63127 32.7029 2.63127H4.04637Z"
                fill="currentColor"
              />
              <path
                d="M30.8234 49.1977H5.90381V5.81494H30.8234V49.1977ZM8.55715 46.5443H28.17V8.46833H8.55715V46.5443Z"
                fill="currentColor"
              />
              <path
                d="M21.5807 52.2056H15.1462V55.456H21.5807V52.2056Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h1 className="mb-[15px] popularCategoryHead  group-hover:text-[#000000] transition duration-200">
            Mobile App Development
          </h1>
          <p className="xl:mb-[50px] lg:[20px] popularCategoryPara px-[10px] group-hover:text-[#000000] transition duration-1000">
            Fermentum fusce himenaeos neque condimentum maecenas vitae congue
            iaculis inceptos ullamcorper habitasse
          </p>
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 60"
              className="w-12 h-12 fill-current  group-hover:text-[#000000] text-white"
            >
              <line
                x1="0"
                y1="30"
                x2="170"
                y2="30"
                stroke="currentColor"
                strokeWidth="3"
              />
              <polygon points="170,30 150,20 150,40" fill="currentColor" />
            </svg>
          </div>
        </div>

        <div className="hover:bg-[#A8FF57B2]/[.7] h-[405px] group transition duration-1000 rounded-[20px] text-center py-[58px] ">
          <div className="h-[60px] w-[60px] mx-auto xl:mb-[45px] lg:mb-[20px] mb-[20px] rounded-full bg-white group-hover:bg-[#000000] flex justify-center items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 57 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:text-white text-[#000000] fill-current transition-colors duration-1000"
            >
              <path
                d="M53.8615 46.6645C53.2682 46.6645 52.7006 46.4323 52.2621 45.9938L49.3472 43.0788C46.6129 40.3445 42.9757 38.8226 39.1063 38.8226H5.00437C2.24423 38.8226 0 36.5783 0 33.8182V5.00438C0 2.24423 2.24423 0 5.00437 0H51.1529C53.913 0 56.1573 2.24423 56.1573 5.00438V44.3945C56.1573 45.3231 55.6156 46.1486 54.7643 46.4839C54.4806 46.5871 54.1968 46.6645 53.8873 46.6645H53.8615ZM4.97857 3.09552C3.92095 3.09552 3.06969 3.94675 3.06969 5.00438V33.8182C3.06969 34.8758 3.92095 35.7271 4.97857 35.7271H39.0805C43.7753 35.7271 48.1864 37.5586 51.514 40.8863L53.0102 42.3824V5.00438C53.0102 3.94675 52.1589 3.09552 51.1013 3.09552H4.97857Z"
                fill="currentColor"
              />
              <path
                d="M16.5867 20.5076V25.383C16.5867 26.5438 17.051 27.1112 18.0054 27.1112H18.6761V28.8654H16.7156C15.2195 28.8654 14.4456 28.0399 14.4456 26.3116V20.9719C14.4456 20.2238 14.1619 19.8627 13.5944 19.8627H12.9495V17.8764H13.5944C14.1619 17.8764 14.4456 17.4895 14.4456 16.7414V11.4017C14.4456 9.72497 15.2195 8.8479 16.7156 8.8479H18.6761V10.602H18.0054C17.0768 10.602 16.5867 11.1695 16.5867 12.3303V17.3347C16.5867 18.0312 16.5093 18.5987 15.8386 18.9082C16.5093 19.192 16.5867 19.8111 16.5867 20.4302V20.5076Z"
                fill="currentColor"
              />
              <path
                d="M22.5197 24.9446C23.6805 24.9446 24.0159 25.7442 24.0159 26.2344C24.0159 26.7245 23.6805 27.5499 22.5197 27.5499C21.3589 27.5499 21.0236 26.7245 21.0236 26.2344C21.0236 25.7442 21.3589 24.9446 22.5197 24.9446Z"
                fill="currentColor"
              />
              <path
                d="M28.0401 24.9446C29.2009 24.9446 29.5362 25.7442 29.5362 26.2344C29.5362 26.7245 29.2009 27.5499 28.0401 27.5499C26.8793 27.5499 26.5439 26.7245 26.5439 26.2344C26.5439 25.7442 26.8793 24.9446 28.0401 24.9446Z"
                fill="currentColor"
              />
              <path
                d="M33.5602 24.9446C34.721 24.9446 35.0564 25.7442 35.0564 26.2344C35.0564 26.7245 34.721 27.5499 33.5602 27.5499C32.3994 27.5499 32.0641 26.7245 32.0641 26.2344C32.0641 25.7442 32.3994 24.9446 33.5602 24.9446Z"
                fill="currentColor"
              />
              <path
                d="M37.4294 27.0857H38.1001C39.0288 27.0857 39.5189 26.5182 39.5189 25.3574V20.5078C39.5189 19.8113 39.5963 19.2696 40.267 18.9601C39.5963 18.6505 39.5189 18.1088 39.5189 17.3865V12.408C39.5189 11.2472 39.0546 10.6796 38.1001 10.6796H37.4294V8.92554H39.3899C40.9119 8.92554 41.6599 9.77681 41.6599 11.4793V16.7932C41.6599 17.5671 41.9437 17.9283 42.5112 17.9283H43.1561V19.9145H42.5112C41.9437 19.9145 41.6599 20.2757 41.6599 21.0237V26.3634C41.6599 28.0659 40.9119 28.9172 39.3899 28.9172H37.4294V27.1631V27.0857Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h1 className="mb-[15px] popularCategoryHead group-hover:text-[#000000] transition duration-1000">
            Programming Languages
          </h1>
          <p className="xl:mb-[50px] lg:[20px] popularCategoryPara px-[10px] group-hover:text-[#000000] transition duration-1000">
            Fermentum fusce himenaeos neque condimentum maecenas vitae congue
            iaculis inceptos ullamcorper habitasse
          </p>
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 60"
              className="w-12 h-12 fill-current  group-hover:text-[#000000] text-white"
            >
              <line
                x1="0"
                y1="30"
                x2="170"
                y2="30"
                stroke="currentColor"
                strokeWidth="3"
              />
              <polygon points="170,30 150,20 150,40" fill="currentColor" />
            </svg>
          </div>
        </div>
        <div className="hover:bg-[#A8FF57B2]/[.7] h-[405px] group  rounded-[20px] text-center py-[58px] ">
          <div className="h-[60px] w-[60px] mx-auto xl:mb-[45px] lg:mb-[20px] mb-[20px] rounded-full bg-white group-hover:bg-[#000000] flex justify-center items-center">
            <svg
              className="w-[30px] h-[30px] group-hover:text-white text-[#000000]"
              width="50"
              height="47"
              viewBox="0 0 50 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.1747 15.6004C19.436 15.6004 14.1059 15.0432 9.76006 14.0032C5.52567 13.0003 0.474121 11.106 0.474121 7.80018C0.474121 2.67434 12.8987 0 25.1747 0C37.4507 0 49.8567 2.67434 49.8567 7.80018C49.8567 11.106 44.8052 13.0003 40.5708 14.0032C36.3178 15.0246 30.8391 15.6004 25.1747 15.6004ZM25.1747 2.22862C11.4501 2.22862 2.70275 5.53441 2.70275 7.80018C2.70275 8.91449 5.0428 10.6045 10.2801 11.8488C14.403 12.8332 19.696 13.3903 25.1747 13.3903C30.6534 13.3903 35.9464 12.8517 40.0508 11.8674C45.288 10.6231 47.6281 8.93307 47.6281 7.81876C47.6281 5.55299 38.8808 2.2472 25.1747 2.2472V2.22862Z"
                fill="currentColor"
              />
              <path
                d="M25.1747 36.0854C19.6217 36.0854 14.1802 35.5283 9.85292 34.5254L9.70434 34.4882C3.66848 33.0211 0.474121 30.8667 0.474121 28.2852C0.474121 27.6724 0.975562 27.1709 1.58843 27.1709C2.20131 27.1709 2.70275 27.6724 2.70275 28.2852C2.70275 29.381 5.00566 31.0524 10.1129 32.2968H10.2244C18.6003 34.3025 31.7492 34.2839 40.0694 32.3153L40.2179 32.2782C45.3252 31.0153 47.6095 29.3624 47.6095 28.2667C47.6095 27.6538 48.111 27.1523 48.7239 27.1523C49.3367 27.1523 49.8382 27.6538 49.8382 28.2667C49.8382 30.8667 46.6438 33.0025 40.6079 34.4697L40.4594 34.5068C36.1507 35.5097 30.7277 36.0668 25.1561 36.0668L25.1747 36.0854Z"
                fill="currentColor"
              />
              <path
                d="M40.3668 34.5248C39.7539 34.5248 39.2524 34.0233 39.2524 33.4105C39.2524 32.7976 39.7539 32.2961 40.3668 32.2961C40.9796 32.2961 41.4811 32.7976 41.4811 33.4105C41.4811 34.0233 40.9982 34.5248 40.3668 34.5248Z"
                fill="currentColor"
              />
              <path
                d="M25.1747 46.3366C12.8987 46.3366 0.474121 43.6623 0.474121 38.5364C0.474121 37.9235 0.975562 37.4221 1.58843 37.4221C2.20131 37.4221 2.70275 37.9235 2.70275 38.5364C2.70275 40.8022 11.4501 44.108 25.1747 44.108C38.8993 44.108 47.6281 40.8022 47.6281 38.5364C47.6281 37.9235 48.1295 37.4221 48.7424 37.4221C49.3553 37.4221 49.8567 37.9235 49.8567 38.5364C49.8567 43.6623 37.4321 46.3366 25.1747 46.3366Z"
                fill="currentColor"
              />
              <path
                d="M9.98274 34.5248H9.96417C9.35129 34.5248 8.84985 34.0233 8.84985 33.4105C8.84985 32.7976 9.35129 32.2961 9.96417 32.2961C10.577 32.2961 11.0785 32.7976 11.0785 33.4105C11.0785 34.0233 10.5956 34.5248 9.98274 34.5248Z"
                fill="currentColor"
              />
              <path
                d="M1.58843 39.6512C0.975562 39.6512 0.474121 39.1497 0.474121 38.5368V18.0521C0.474121 17.4392 0.975562 16.9377 1.58843 16.9377C2.20131 16.9377 2.70275 17.4392 2.70275 18.0521V38.5368C2.70275 39.1497 2.20131 39.6512 1.58843 39.6512Z"
                fill="currentColor"
              />
              <path
                d="M25.1747 25.8519C19.5289 25.8519 14.2359 25.3133 9.87149 24.2733L9.72291 24.2362C5.5071 23.2333 0.474121 21.3389 0.474121 18.0517V7.80005H2.70275C2.70275 8.91436 5.0428 10.6044 10.2801 11.8487C14.403 12.833 19.696 13.3902 25.1747 13.3902C30.6534 13.3902 35.9464 12.8516 40.0508 11.8673C45.288 10.623 47.6281 8.93294 47.6281 7.81862H49.8567V18.0703C49.8567 21.3575 44.8238 23.2518 40.6079 24.2547L40.4594 24.2919C36.1693 25.3133 30.7463 25.8705 25.1747 25.8705V25.8519ZM10.1129 22.0447L10.2615 22.0818C14.4216 23.0847 19.7332 23.6233 25.1747 23.6233C30.6163 23.6233 35.9278 23.0661 40.0694 22.0818L40.2179 22.0447C45.3438 20.8004 47.6281 19.1475 47.6281 18.0517V9.9714C44.8817 11.0814 40.4594 12.0918 25.1747 12.0918C9.89005 12.0918 5.48727 11.0814 2.70275 9.9714V18.0517C2.70275 19.1475 4.96855 20.8004 10.1129 22.0447Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h1 className="mb-[15px] popularCategoryHead  group-hover:text-[#000000] transition duration-1000">
            Data Science and AI
          </h1>
          <p className="xl:mb-[50px] lg:mb-[20px] popularCategoryPara px-[10px]  group-hover:text-[#000000] transition duration-1000">
            Fermentum fusce himenaeos neque condimentum maecenas vitae congue
            iaculis inceptos ullamcorper habitasse
          </p>
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 60"
              className="w-12 h-12 fill-current  group-hover:text-[#000000] text-white"
            >
              <line
                x1="0"
                y1="30"
                x2="170"
                y2="30"
                stroke="currentColor"
                strokeWidth="3"
              />
              <polygon points="170,30 150,20 150,40" fill="currentColor" />
            </svg>
          </div>
        </div>
        <div className="hover:bg-[#A8FF57B2]/[.7] h-[405px] group transition duration-1000 rounded-[20px] text-center py-[58px] ">
          <div className="h-[60px] w-[60px] mx-auto xl:mb-[45px] lg:mb-[20px] mb-[20px] rounded-full bg-white group-hover:bg-[#000000] flex justify-center items-center">
            <svg
              className="w-[30px] h-[30px] group-hover:text-white text-[#000000]"
              width="47"
              height="46"
              viewBox="0 0 47 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.8131 30.8362H4.49838C0.434791 30.8362 0 28.679 0 27.7593V17.107C0 15.6354 1.20401 14.4314 2.6756 14.4314H44.2312C45.7028 14.4314 46.9068 15.6354 46.9068 17.107V27.7593C46.9068 29.4483 45.5188 30.8362 43.8298 30.8362H43.8131ZM2.6756 16.4381C2.3077 16.4381 2.0067 16.7391 2.0067 17.107V27.7593C2.0067 28.6958 3.56191 28.8295 4.49838 28.8295H43.8131C44.3984 28.8295 44.8834 28.3446 44.8834 27.7593V17.107C44.8834 16.7391 44.5824 16.4381 44.2145 16.4381H2.65888H2.6756Z"
                fill="currentColor"
              />
              <path
                d="M44.8834 16.4383H2.0067C0.903014 16.4383 0 15.5353 0 14.4316V3.09366C0 2.50837 0.167224 1.92307 0.46823 1.43812C1.07024 0.535098 2.04015 0 3.07695 0H43.7964C45.5021 0 46.8901 1.38796 46.8901 3.09366V14.4316C46.8901 15.5353 45.9871 16.4383 44.8834 16.4383ZM3.07695 2.0067C2.70905 2.0067 2.37459 2.19065 2.1572 2.5251C2.05687 2.6756 2.0067 2.87627 2.0067 3.09366V14.4316H44.8834V3.09366C44.8834 2.49165 44.3984 2.0067 43.7964 2.0067H3.07695Z"
                fill="currentColor"
              />
              <path
                d="M8.47838 12.2744C6.271 12.2744 4.48169 10.4851 4.48169 8.2777C4.48169 6.07032 6.271 4.28101 8.47838 4.28101C10.6858 4.28101 12.4918 6.07032 12.4918 8.2777C12.4918 10.4851 10.7025 12.2744 8.47838 12.2744ZM8.47838 6.271C7.37469 6.271 6.48839 7.17401 6.48839 8.2777C6.48839 9.38139 7.39142 10.2677 8.47838 10.2677C9.56535 10.2677 10.4684 9.36467 10.4684 8.2777C10.4684 7.19073 9.56535 6.271 8.47838 6.271Z"
                fill="currentColor"
              />
              <path
                d="M8.47838 26.6389C6.271 26.6389 4.48169 24.8496 4.48169 22.6422C4.48169 20.4348 6.271 18.6455 8.47838 18.6455C10.6858 18.6455 12.4918 20.4348 12.4918 22.6422C12.4918 24.8496 10.7025 26.6389 8.47838 26.6389ZM8.47838 20.6355C7.37469 20.6355 6.48839 21.5385 6.48839 22.6255C6.48839 23.7125 7.39142 24.6322 8.47838 24.6322C9.56535 24.6322 10.4684 23.7292 10.4684 22.6255C10.4684 21.5218 9.56535 20.6355 8.47838 20.6355Z"
                fill="currentColor"
              />
              <path
                d="M27.1073 7.89297C27.4951 7.89297 27.8096 7.57852 27.8096 7.19063C27.8096 6.80273 27.4951 6.48828 27.1073 6.48828C26.7194 6.48828 26.4049 6.80273 26.4049 7.19063C26.4049 7.57852 26.7194 7.89297 27.1073 7.89297Z"
                fill="currentColor"
              />
              <path
                d="M30.1005 7.89297C30.4884 7.89297 30.8029 7.57852 30.8029 7.19063C30.8029 6.80273 30.4884 6.48828 30.1005 6.48828C29.7126 6.48828 29.3982 6.80273 29.3982 7.19063C29.3982 7.57852 29.7126 7.89297 30.1005 7.89297Z"
                fill="currentColor"
              />
              <path
                d="M33.0941 7.89297C33.482 7.89297 33.7964 7.57852 33.7964 7.19063C33.7964 6.80273 33.482 6.48828 33.0941 6.48828C32.7062 6.48828 32.3917 6.80273 32.3917 7.19063C32.3917 7.57852 32.7062 7.89297 33.0941 7.89297Z"
                fill="currentColor"
              />
              <path
                d="M36.0705 7.89297C36.4584 7.89297 36.7729 7.57852 36.7729 7.19063C36.7729 6.80273 36.4584 6.48828 36.0705 6.48828C35.6826 6.48828 35.3682 6.80273 35.3682 7.19063C35.3682 7.57852 35.6826 7.89297 36.0705 7.89297Z"
                fill="currentColor"
              />
              <path
                d="M39.0639 7.89297C39.4518 7.89297 39.7663 7.57852 39.7663 7.19063C39.7663 6.80273 39.4518 6.48828 39.0639 6.48828C38.676 6.48828 38.3616 6.80273 38.3616 7.19063C38.3616 7.57852 38.676 7.89297 39.0639 7.89297Z"
                fill="currentColor"
              />
              <path
                d="M28.5288 10.0334C28.9167 10.0334 29.2311 9.7189 29.2311 9.33101C29.2311 8.94311 28.9167 8.62866 28.5288 8.62866C28.1409 8.62866 27.8264 8.94311 27.8264 9.33101C27.8264 9.7189 28.1409 10.0334 28.5288 10.0334Z"
                fill="currentColor"
              />
              <path
                d="M31.5223 10.0334C31.9102 10.0334 32.2246 9.7189 32.2246 9.33101C32.2246 8.94311 31.9102 8.62866 31.5223 8.62866C31.1344 8.62866 30.82 8.94311 30.82 9.33101C30.82 9.7189 31.1344 10.0334 31.5223 10.0334Z"
                fill="currentColor"
              />
              <path
                d="M34.5157 10.0334C34.9036 10.0334 35.218 9.7189 35.218 9.33101C35.218 8.94311 34.9036 8.62866 34.5157 8.62866C34.1278 8.62866 33.8134 8.94311 33.8134 9.33101C33.8134 9.7189 34.1278 10.0334 34.5157 10.0334Z"
                fill="currentColor"
              />
              <path
                d="M37.5091 10.0334C37.897 10.0334 38.2115 9.7189 38.2115 9.33101C38.2115 8.94311 37.897 8.62866 37.5091 8.62866C37.1212 8.62866 36.8068 8.94311 36.8068 9.33101C36.8068 9.7189 37.1212 10.0334 37.5091 10.0334Z"
                fill="currentColor"
              />
              <path
                d="M40.5026 10.0334C40.8905 10.0334 41.2049 9.7189 41.2049 9.33101C41.2049 8.94311 40.8905 8.62866 40.5026 8.62866C40.1147 8.62866 39.8003 8.94311 39.8003 9.33101C39.8003 9.7189 40.1147 10.0334 40.5026 10.0334Z"
                fill="currentColor"
              />
              <path
                d="M32.0201 12.4422C32.408 12.4422 32.7224 12.1278 32.7224 11.7399C32.7224 11.352 32.408 11.0375 32.0201 11.0375C31.6322 11.0375 31.3177 11.352 31.3177 11.7399C31.3177 12.1278 31.6322 12.4422 32.0201 12.4422Z"
                fill="currentColor"
              />
              <path
                d="M35.0136 12.4422C35.4015 12.4422 35.7159 12.1278 35.7159 11.7399C35.7159 11.352 35.4015 11.0375 35.0136 11.0375C34.6257 11.0375 34.3112 11.352 34.3112 11.7399C34.3112 12.1278 34.6257 12.4422 35.0136 12.4422Z"
                fill="currentColor"
              />
              <path
                d="M38.0071 12.4422C38.395 12.4422 38.7094 12.1278 38.7094 11.7399C38.7094 11.352 38.395 11.0375 38.0071 11.0375C37.6192 11.0375 37.3047 11.352 37.3047 11.7399C37.3047 12.1278 37.6192 12.4422 38.0071 12.4422Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h1 className="mb-[15px] popularCategoryHead  group-hover:text-[#000000] transition duration-1000">
            Database Management
          </h1>
          <p className="xl:mb-[50px] lg:mb-[20px]  popularCategoryPara px-[10px]  group-hover:text-[#000000] transition duration-1000">
            Fermentum fusce himenaeos neque condimentum maecenas vitae congue
            iaculis inceptos ullamcorper habitasse
          </p>
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 60"
              className="w-12 h-12 fill-current  group-hover:text-[#000000] text-white"
            >
              <line
                x1="0"
                y1="30"
                x2="170"
                y2="30"
                stroke="currentColor"
                strokeWidth="3"
              />
              <polygon points="170,30 150,20 150,40" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
