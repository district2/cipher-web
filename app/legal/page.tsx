import Image from "next/image"
import logo from "@/public/icons/logo.svg";

export default function Legal() {
    return (
        <div className="min-h-screen px-16 flex flex-col gap-y-14">
            <div className="w-full flex flex-col items-center gap-y-2">
                <h1 className="font-bold text-3xl">
                    CipherOS Legal
                </h1>
                <Image src={logo} alt="CipherOS logo" width={80} height={80} />
            </div>
            <Disclaimer />
            <TermsOfUse />
            <PrivacyPolicy />
            <hr />
            <SoftwareLicense />
            <LicenseGrant />
            <Termination />
            <DisclaimerOfWarranty />
            <LimitationOfLiability />
            <EntireAgreement />
            <Waiver />
            <Severability />
            <p className="text-neutral-500">
                © 2019 - 2024 The CipherOS Project. All Rights Reserved.
            </p>
        </div>
    )
}

function SectionTitle({ title }: { title: string }) {
    return (
        <h1 className="font-bold text-xl">
            {title}
        </h1>
    )
}

function SectionContent({ content }: { content: string }) {
    return (
        <p className="whitespace-pre-wrap">
            {content}
        </p>
    )
}

function Disclaimer() {
    return (
        <div className="flex flex-col gap-y-5">
            <SectionTitle title="DISCLAIMER" />
            <SectionContent content={`All information and files, whether in source or compiled form, are provided on an "as-is" basis. CipherOS makes no guarantees or warranties, either expressed or implied. The user assumes all risks, including but not limited to data loss, hardware damages, or loss of business profits. Use at your own risk. Unless explicitly allowed by the warranty covering your device, tampering with system software or hardware may void warranties.`} />
        </div>
    )
}

function TermsOfUse() {
    return (
        <div className="flex flex-col gap-y-5">
            <SectionTitle title="TERMS OF USE" />
            <SectionContent content={`Certain images, logos, pictures, and works from organizations other than CipherOS may be trademarks and/or service marks, subject to the laws of their registered countries. CipherOS' usage constitutes "fair use" under section 107 of the US Copyright Law. Any use beyond "fair use" requires permission from the copyright owner. Requests for removal of copyright material can be sent to legal@cipheros.online.`} />
        </div>
    )
}

function PrivacyPolicy() {
    return (
        <div className="flex flex-col gap-y-5">
            <SectionTitle title="PRIVACY POLICY" />
            <SectionContent content={"Your privacy is important to CipherOS. We do NOT collect, use, or transfer your data or store your information on our servers.\n\nCipherOS provides an after-market operating system and applications for various mobile devices."} />
        </div>
    )
}

function SoftwareLicense() {
    return (
        <div className="flex flex-col gap-y-5">
            <SectionTitle title="CipherOS Software License Agreement" />
            <SectionContent content={`This Software License Agreement ("Agreement") is a legal agreement between you (either an individual or a single entity) and the CipherOS project team.\n\nBy installing, copying, or otherwise using the CipherOS software ("Software"), you agree to be bound by the terms and conditions of this Agreement. If you do not agree to the terms and conditions, do not install or use the Software.`} />
        </div>
    )
}

function LicenseGrant() {
    return (
        <div className="flex flex-col gap-y-5">
            <SectionTitle title="1. License Grant" />
            <SectionContent content={"The CipherOS project team grants you the right to use the Software in accordance with the terms and conditions of this Agreement."} />
        </div>
    )
}

function Termination() {
    return (
        <div className="flex flex-col gap-y-5">
            <SectionTitle title="2. Termination" />
            <SectionContent content={"This Agreement is effective until terminated. You may terminate it at any time by destroying all copies of the Software in your possession. The Agreement will also terminate if you fail to comply with any term or condition. Upon termination, you must destroy all copies of the Software."} />
        </div>
    )
}

function DisclaimerOfWarranty() {
    return (
        <div className="flex flex-col gap-y-5">
            <SectionTitle title="3. Disclaimer of Warranty" />
            <SectionContent content={`THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. CIPHEROS DISCLAIMS ALL WARRANTIES, EITHER EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.`} />
        </div>
    )
}

function LimitationOfLiability() {
    return (
        <div className="flex flex-col gap-y-5">
            <SectionTitle title="4. Limitation of Liability" />
            <SectionContent content={"IN NO EVENT SHALL CIPHEROS PROJECT TEAM BE LIABLE FOR ANY DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES."} />
        </div>
    )
}

function EntireAgreement() {
    return (
        <div className="flex flex-col gap-y-5">
            <SectionTitle title="5. Entire Agreement" />
            <SectionContent content={"This Agreement constitutes the entire agreement between you and the CipherOS project team, superseding any prior agreements, whether oral or written."} />
        </div>
    )
}

function Waiver() {
    return (
        <div className="flex flex-col gap-y-5">
            <SectionTitle title="6. Waiver" />
            <SectionContent content={"No waiver of any term or condition shall be deemed a continuing waiver."} />
        </div>
    )
}

function Severability() {
    return (
        <div className="flex flex-col gap-y-5">
            <SectionTitle title="7. Severability" />
            <SectionContent content={"If any provision is found to be invalid or unenforceable, that provision shall be enforced to the maximum extent possible, and the remaining provisions shall remain in full force and effect."} />
        </div>
    )
}
