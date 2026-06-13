export default function WebcamPanel(){

return(

<div
style={{
background:"white",
padding:"32px",
borderRadius:"28px"
}}
>

<h2>

Live Webcam Detection

</h2>

<p
style={{
color:"#64748b"
}}
>

Real-time deepfake detection

</p>

<div
style={{
marginTop:"20px",
height:"320px",
borderRadius:"20px",
background:"#111827",
display:"flex",
justifyContent:"center",
alignItems:"center",
color:"white",
fontSize:"22px"
}}
>

📷 Camera Preview

</div>

<div
style={{
display:"flex",
gap:"10px",
marginTop:"20px"
}}
>

<button
style={{
flex:1,
padding:"18px",
border:"none",
borderRadius:"16px",
background:"#2952ff",
color:"white"
}}
>

Start Camera

</button>

<button
style={{
flex:1,
padding:"18px",
border:"none",
borderRadius:"16px"
}}
>

Capture

</button>

</div>

</div>

)

}