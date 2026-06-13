type Props={

result:string

confidence:number

time:string

}

export default function ResultDashboard({

result,

confidence,

time

}:Props){

return(

<div
style={{

background:"white",

padding:"32px",

borderRadius:"28px"

}}
>

<h2>

Detection Dashboard

</h2>

<br/>

<h1
style={{
fontSize:"46px"
}}
>

{result}

</h1>

<p>

Confidence

</p>

<div
style={{

height:"16px",

background:"#e2e8f0",

borderRadius:"20px",

overflow:"hidden"

}}
>

<div
style={{

width:`${confidence}%`,

height:"100%",

background:"#2952ff",

transition:"0.5s"

}}
>

</div>

</div>

<br/>

<h2>

{confidence}%

</h2>

<p>

Processing:
{time}s

</p>

<p>

Status:
Completed

</p>

</div>

)

}