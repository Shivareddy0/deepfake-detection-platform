export default function ForensicReport(){

return(

<div
style={{
background:"white",
padding:"32px",
borderRadius:"28px"
}}
>

<h2>

Forensic Report

</h2>

<div
style={{
marginTop:"25px",
display:"grid",
gap:"14px"
}}
>

<div>

Prediction:
FAKE

</div>

<div>

Confidence:
92%

</div>

<div>

Manipulation:
Face Swap

</div>

<div>

Evidence:
Detected

</div>

</div>

<div
style={{
display:"flex",
gap:"12px",
marginTop:"30px"
}}
>

<button
style={{
flex:1,
padding:"18px",
background:"#2952ff",
color:"white",
border:"none",
borderRadius:"14px"
}}
>

Generate PDF

</button>

<button
style={{
flex:1,
padding:"18px",
border:"none",
borderRadius:"14px"
}}
>

Export JSON

</button>

</div>

</div>

)

}