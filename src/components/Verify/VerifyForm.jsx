import { verifyImg } from "../../constant/images"

const VerifyForm = () => {
    return (
        <div className="flex items-center justify-between gap-7">
            <div>
                <img
                    src={verifyImg}
                    alt="verify image"
                    width={625}
                    className="max-w-[625px]"
                />
            </div>
            <div className="max-w-[656px] w-full">
                <form className="flex flex-col w-full gap-[30px]">
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="p-5
                        border border-[rgba(255, 255, 255, 0.20)]
                        outline-none
                        w-full
                        placeholder:text-[18px] placeholder:text-white
                        bg-[#1A1A1A]
                        "
                    />
                    <input
                        type="text"
                        placeholder="Enter Certificate/ID Here"
                        className="p-5 outline-none border border-[rgba(255, 255, 255, 0.20)]
                        w-full
                         placeholder:text-[18px] placeholder:text-white
                         bg-[#1A1A1A]"
                    />
                    <button>Verify</button>
                </form>
            </div>
        </div>
    )
}

export default VerifyForm
