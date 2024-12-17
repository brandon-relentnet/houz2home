import dynamic from "next/dynamic";

const Logo = dynamic(() => import("@/components/Logo"));

export default function Socials() {
    return (
        <>  
            <div className="w-16 h-16">
                <Logo />
            </div>
        </>
    );
}