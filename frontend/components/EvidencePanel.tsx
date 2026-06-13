export default function EvidencePanel(){

return(

<div
style={{
background:"white",
padding:"32px",
borderRadius:"28px"
}}
>

<h2>

Evidence Gallery

</h2>

<div
style={{
display:"grid",
gridTemplateColumns:"1fr 1fr 1fr",
gap:"20px",
marginTop:"25px"
}}
>

{

[1,2,3].map(

(i)=>(

<div

key={i}

style={{

height:"220px",

background:"#f8fafc",

borderRadius:"20px",

display:"flex",

justifyContent:"center",

alignItems:"center"

}}

>

Evidence {i}

</div>

)

)

}

</div>

</div>

)

}