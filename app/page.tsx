import mockupPhone from "@/public/images/mockup.webp"
import ui from "@/public/icons/ui.svg"
import shield from "@/public/icons/shield.svg"
import battery from "@/public/icons/battery.svg"
import eye from "@/public/icons/eye.svg"
import Image from "next/image"
import MemberCard from "@/components/member-card"

export default function Home() {
  return (
    <main className="flex flex-col gap-y-36 justify-between items-center p-24 min-h-screen">
      <div className="flex flex-wrap gap-8 justify-center items-center w-full">
        <div className="flex flex-col">
          <h2 className="text-3xl lg:text-5xl">
            CipherOS
          </h2>
          <h1 className="w-full text-4xl text-transparent bg-clip-text bg-gradient-to-b to-gray-500 from-neutral-600 lg:text-6xl">
            The ultimate
            <br />
            Android experience
            <br />
            made for power users
          </h1>
        </div>
        <Image src={mockupPhone} alt="phone mockup" className="hidden md:block w-auto max-h-[80vh]" priority />
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        <div className="flex flex-col gap-y-4 p-5 w-56 h-44 rounded-lg bg-neutral-950">
          <Image src={ui} alt={"User interface icon"} className="opacity-80" />
          <p>
            New refreshed UI based on our custom &apos;seamless&apos; design
          </p>
        </div>
        <div className="flex flex-col gap-y-4 p-5 w-56 h-44 rounded-lg bg-neutral-950">
          <Image src={shield} alt={"Shield icon"} className="opacity-80" />
          <p>
            Stay always up-to date with latest security patches
          </p>
        </div>
        <div className="flex flex-col gap-y-4 p-5 w-56 h-44 rounded-lg bg-neutral-950">
          <Image src={battery} alt={"Battery icon"} className="opacity-80" />
          <p>
            Background services are stripped down to minimal to preserve battery life
          </p>
        </div>
        <div className="flex flex-col gap-y-4 p-5 w-56 h-44 rounded-lg bg-neutral-950">
          <Image src={eye} alt={"Eye-off icon"} className="opacity-80" />
          <p>
            Experience the most minimal and bloat-free experience with your privacy rights
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-20 items-center">
        <h1 className="text-3xl font-medium text-center">
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
