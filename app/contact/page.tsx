import Image from "next/image";
// Used Copilot AI for assistance on the structure for image and styling for div container/text.
export default function ContactPage() {
    return (
        <div style={{padding: "40px", display:"flex", flexDirection:"column", alignItems: "center", textAlign:"center", fontFamily:"Geist", backgroundColor:"rgb(15, 26, 56)", color: "white", borderRadius:"20px", marginRight:"40px", marginLeft:"40px", marginTop:"40px"}}>
            <h1 className="text-xl font-bold mb-5">We appreciate you visiting our website at TarFix!</h1>
            <p style={{marginBottom:"25px"}}>If you experience any issues with our website, please reach out to us.</p>

            <Image
            src="/TarFixLogo.png"
            alt="TarFix Logo"
            height={200}
            width={200}
            />

            <h2 style={{marginTop: "25px", fontWeight: "bold", marginBottom:"15px"}}>Contact Us</h2>
            <ul>
                <li>Email: Example@gmail.com</li>
                <li>Phone Number: (123)-456-789</li>
            </ul>
        </div>
    );
}