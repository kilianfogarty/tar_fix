// Used Copilot AI for assistance on styling for div container/text and referenced structure from contact webpage.
export default function ReportPage() {
    return (
        <div style={{padding: "40px", display:"flex", flexDirection:"column", alignItems: "center", textAlign:"center", fontFamily:"Geist", backgroundColor:"rgb(15, 26, 56)", color: "white", borderRadius:"20px", marginRight:"40px", marginLeft:"40px", marginTop:"40px"}}>
            <h1 className="text-xl font-bold">Help Make Campus Safer!</h1>
            <p style={{marginBottom:"25px"}}>Take or upload a photo that needs fixing.</p>

            <h2 style={{marginTop: "25px", fontWeight: "bold"}}>Add Description Below:</h2>
            <ul>
                <li>Please tell us what needs to be fixed!</li>
            </ul>
        </div>
    );
}