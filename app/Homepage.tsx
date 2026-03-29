// Use Copilot AI for separating the homepage content from appearing on every page through use client, importing usePathname and the Homepage function. Also for some assistance with styling.
"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Homepage() {
    const path = usePathname();
    const isHome = path === "/";

if (!isHome) return null;

return (
    <div style={{padding: "30px", borderRadius: "20px", marginRight:"60px", marginLeft:"60px", marginTop:"60px", display:"flex", flexDirection:"column", alignItems: "center", textAlign:"center", fontFamily:"Geist", backgroundColor:"rgb(15, 26, 56)", color: "white"}}>
        <h1 className="text-xl font-bold">Welcome to TarFix</h1>
        <p className="mt-5 mb-7">Are you tired of tripping over missing bricks on campus sidewalks? Have you ever fallen/almost fallen on campus due to construction issues? TarFix can help!</p>
        <Image
                    src="/IntroImage.png"
                    alt="UNC Ramses tripping over bricks."
                    height={400}
                    width={400}
                    />
        <h2 className="mt-7">With TarFix you can snap a picture of the area in need of fixing, describe the issue, and report it to maintenance within minutes!</h2>
    </div>
    );
}