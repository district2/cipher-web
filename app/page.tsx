import mockupPhone from "@/public/images/mockup.webp"
import ui from "@/public/icons/ui.svg"
import shield from "@/public/icons/shield.svg"
import battery from "@/public/icons/battery.svg"
import eye from "@/public/icons/eye.svg"
import Image from "next/image"
import MemberCard from "@/components/member-card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-y-36">
      <div className="flex justify-center w-full items-center flex-wrap gap-8">
        <div className="flex flex-col">
          <h2 className="text-3xl lg:text-5xl">
            CipherOS
          </h2>
          <h1 className="text-4xl bg-gradient-to-b from-neutral-600 to-gray-500 bg-clip-text text-transparent w-full lg:text-6xl">
            The ultimate
            <br />
            Android experience
            <br />
            made for power users
          </h1>
        </div>
        <Image src={mockupPhone} alt="phone mockup" className="hidden md:block w-auto max-h-[80vh]" />
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        <div className="bg-neutral-950 flex flex-col gap-y-4 p-5 rounded-lg w-56 h-44">
          <Image src={ui} alt={"User interface icon"} className="opacity-80" />
          <p>
            New refreshed UI based on our custom &apos;seamless&apos; design
          </p>
        </div>
        <div className="bg-neutral-950 flex flex-col gap-y-4 p-5 rounded-lg w-56 h-44">
          <Image src={shield} alt={"Shield icon"} className="opacity-80" />
          <p>
            Stay always up-to date with latest security patches
          </p>
        </div>
        <div className="bg-neutral-950 flex flex-col gap-y-4 p-5 rounded-lg w-56 h-44">
          <Image src={battery} alt={"Battery icon"} className="opacity-80" />
          <p>
            Background services are stripped down to minimal to preserve battery life
          </p>
        </div>
        <div className="bg-neutral-950 flex flex-col gap-y-4 p-5 rounded-lg w-56 h-44">
          <Image src={eye} alt={"Eye-off icon"} className="opacity-80" />
          <p>
            Experience the most minimal and bloat-free experience with your privacy rights
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-20 items-center">
        <h1 className="font-medium text-3xl text-center">
          Behind the scenes
        </h1>
        <div className="flex flex-wrap gap-10 justify-center">
          <MemberCard name="Alibei" role="Leader" image="https://avatars.githubusercontent.com/u/24531178" gitUsername="alibei" />
          <MemberCard name="Aryan Sinha" role="Leader" image="https://avatars.githubusercontent.com/u/63485082" gitUsername="techyminati" />
          <MemberCard name="Sarthak Roy" role="Developer" image="https://avatars.githubusercontent.com/u/47187468" gitUsername="sarthakroy2002" />
          <MemberCard name="District2" role="Developer" image="https://avatars.githubusercontent.com/u/111503426" gitUsername="district2" />
        </div>
      </div>
    </main>
  )
}
