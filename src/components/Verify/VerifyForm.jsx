import { useState } from "react"
import { verifyImg } from "../../constant/images"

const VerifyForm = () => {
    const [formInput, setFormInput] = useState({ name: "", certificate: "" })
    const handleFrom = (e) => {
        e.preventDefault()
    }
    console.log(formInput)
    return (
        <div className="flex items-center justify-between gap-7 flex-col md:flex-row">
            <div>
                <img
                    src={verifyImg}
                    alt="verify image"
                    width={625}
                    className="max-w-[625px] w-full"
                />
            </div>
            <div className="max-w-[656px] w-full">
                <form
                    className="flex flex-col w-full gap-[30px]"
                    onSubmit={handleFrom}
                >
                    <input
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        className="p-5
                        border border-[rgba(255, 255, 255, 0.20)]
                        outline-none
                        w-full
                        placeholder:text-[18px] text-white placeholder:text-white
                        bg-[#1A1A1A]
                        "
                        value={formInput.name}
                        onChange={(e) =>
                            setFormInput((value) => {
                                return {
                                    ...value,
                                    name: e.target.value,
                                }
                            })
                        }
                    />
                    <input
                        type="text"
                        placeholder="Enter Certificate/ID Here"
                        name="certificate"
                        className="p-5 outline-none border border-[rgba(255, 255, 255, 0.20)]
                        w-full
                         placeholder:text-[18px] text-white placeholder:text-white
                         bg-[#1A1A1A]"
                        value={formInput.certificate}
                        onChange={(e) =>
                            setFormInput((value) => {
                                return {
                                    ...value,
                                    certificate: e.target.value,
                                }
                            })
                        }
                    />
                    <button className="bg-[#A8FF57] text-[#1A1A1A] max-w-[160px] font-gucina py-4 px-[50px] rounded-[8px] font-bold text-[18px]">
                        Verify
                    </button>
                </form>
            </div>
        </div>
    )
}

export default VerifyForm
