export default function Timeline(){

const items=[

"Upload",

"Frame Analysis",

"Frequency Scan",

"Detection",

"Evidence"

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

Detection Timeline

</h2>

<div
style={{
display:"flex",
justifyContent:"space-between",
marginTop:"40px"
}}
>

{

items.map(

(item,index)=>(

<div
key={index}
style={{
textAlign:"center",
flex:1
}}
>

<div
style={{
width:"50px",
height:"50px",
margin:"auto",
borderRadius:"50%",
background:"#2952ff",
color:"white",
display:"flex",
alignItems:"center",
justifyContent:"center"
}}
>

{index+1}

</div>

<p
style={{
marginTop:"10px"
}}
>

{item}

</p>

</div>

)

)

}

</div>

</div>

)

}