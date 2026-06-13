export default function AnalysisWorkspace(){

const cards=[

"Media Preview",

"Manipulated Region",

"Frequency Spectrum",

"Metadata Analysis"

]

return(

<div
style={{

background:"white",

padding:"32px",

borderRadius:"28px"

}}
>

<h2>

Analysis Workspace

</h2>

<p
style={{
color:"#64748b"
}}
>

Deepfake forensic visualization

</p>

<div
style={{

display:"grid",

gridTemplateColumns:"1fr 1fr",

gap:"20px",

marginTop:"25px"

}}
>

{

cards.map(

(card)=>(

<div

key={card}

style={{

height:"250px",

background:"#f8fafc",

borderRadius:"22px",

padding:"20px",

display:"flex",

flexDirection:"column",

justifyContent:"space-between",

border:"1px solid #e2e8f0"

}}

>

<div>

<h3>

{card}

</h3>

<p
style={{
color:"#64748b"
}}
>

Visualization Area

</p>

</div>

<div
style={{

height:"130px",

borderRadius:"14px",

background:

card==="Manipulated Region"

?

"linear-gradient(90deg,#dbeafe,#fecaca)"

:

"#edf2f7"

}}
>

</div>

</div>

)

)

}

</div>

</div>

)

}