import Image from "next/image";

export default function ContactPage() {
    return (
        <div style={{padding: "40px", display:"flex", flexDirection:"column", alignItems: "center", textAlign:"center", fontFamily:"Geist"}}>
            <h1 className="text-xl font-bold">If any issues arise with the website please contact us through the following email:</h1>
            <p style={{marginBottom:"25px"}}>We appreciate you visiting our website at TarFix, please reach out if any issues arise!</p>

            <Image
            src="/TarFixLogo.png"
            alt="TarFix Logo"
            height={200}
            width={200}
            />

            <h2 style={{marginTop: "25px", fontWeight: "bold"}}>Contact Us!</h2>
            <ul>
                <li>Email: Example@gmail.com</li>
                <li>Phone Number: (123)-456-789</li>
            </ul>
        </div>
    );
}