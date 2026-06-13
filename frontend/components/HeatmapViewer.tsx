export default function HeatmapViewer(){

return(

<div
style={{
background:"white",
padding:"32px",
borderRadius:"28px"
}}
>

<h2>

Manipulated Region Heatmap

</h2>

<div
style={{
marginTop:"20px",
height:"320px",
borderRadius:"20px",
background:
"linear-gradient(90deg,#dbeafe,#fecaca,#fee2e2)",
display:"flex",
justifyContent:"center",
alignItems:"center"
}}
>

Heatmap Overlay

</div>

<div
style={{
marginTop:"20px",
display:"flex",
gap:"10px"
}}
>

<div
style={{
flex:1,
padding:"16px",
background:"#eff6ff",
borderRadius:"12px"
}}
>

Face Region

</div>

<div
style={{
flex:1,
padding:"16px",
background:"#fef2f2",
borderRadius:"12px"
}}
>

Confidence Peak

</div>

</div>

</div>

)

}