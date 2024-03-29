import mockupPhone from "@/public/images/mockup.webp"
import ui from "@/public/icons/ui.svg"
import shield from "@/public/icons/shield.svg"
import battery from "@/public/icons/battery.svg"
import eye from "@/public/icons/eye.svg"
import Image from "next/image"
import MemberCard from "@/components/member-card"

export default function Home() {

  const features: Array<[any, string, string]> =
    [
      [ui, "UI icon", "New refreshed UI based on our custom 'seamless' design"],
      [shield, "Shield icon", "Stay always up-to date with latest security patches"],
      [battery, "Battery icon", "Background services are stripped down to minimal to preserve battery life"],
      [eye, "Eye icon", "Experience the most minimal and bloat-free experience with your privacy rights"]
    ]

  const team = [
    <MemberCard name="Alibei" role="Leader" image="https://avatars.githubusercontent.com/u/24531178" gitUsername="alibei" key={1} />,
    <MemberCard name="Aryan Sinha" role="Leader" image="https://avatars.githubusercontent.com/u/63485082" gitUsername="techyminati" key={2} />,
    <MemberCard name="Sarthak Roy" role="Developer" image="https://avatars.githubusercontent.com/u/47187468" gitUsername="sarthakroy2002" key={3} />,
    <MemberCard name="District2" role="Developer" image="https://avatars.githubusercontent.com/u/111503426" gitUsername="district2" key={4} />
  ]

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
        {
          features.map(([image, alt, description], i) =>
            <div className="flex flex-col gap-y-4 p-5 w-56 h-44 rounded-lg bg-neutral-950" key={i}>
              <Image src={image} alt={alt} className="opacity-80" />
              <p>
                {description}
              </p>
            </div>
          )
        }
      </div>

      <div className="flex flex-col gap-y-20 items-center">
        <h1 className="text-3xl font-medium text-center">
          Behind the scenes
        </h1>
        <div className="flex flex-wrap gap-10 justify-center">
          {team}
        </div>
      </div>
    </main>
  )
}
