import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen items-center justify-center bg-slate-300">

      <div className="bg-white rounded-[20px] px-[16px] pt-[16px] pb-[40px]">
        <Image src={"/images/image-qr-code.png"} alt="QR Code"
          width={288} height={288} className="rounded-[10px] pb-[24px]" />

        <div className=" max-w-[288px] px-[16px]">

          <h1 className="text-slate-900 outfit-bold text-center">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-slate-500 outfit-regular mt-[16px] text-center">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>

        </div>
      </div>

    </main>
  );
}
