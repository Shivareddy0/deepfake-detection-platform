"use client"

import { useState } from "react"

export default function Home(){

const [media,setMedia]=useState("image")
const [file,setFile]=useState<File|null>(null)

const [preview,setPreview]=useState("")
const [result,setResult]=useState("")
const [confidence,setConfidence]=useState(0)
const [time,setTime]=useState("")
const [loading,setLoading]=useState(false)

async function upload(){

if(!file){

alert("Select a file")

return

}

setLoading(true)

const start=Date.now()

const form=
new FormData()

form.append(
"file",
file
)

try{

const response=

await fetch(
"http://127.0.0.1:8000/upload",
{
method:"POST",
body:form
}
)

const data=
await response.json()

setResult(
data.prediction
)

setConfidence(
data.confidence
)

setTime(

(
(Date.now()-start)

/1000

).toFixed(2)

)

}

catch{

alert(
"Upload failed"
)

}

finally{

setLoading(false)

}

}

return(

<div

style={{

background:"#f8fafc",

minHeight:"100vh",

padding:"30px"

}}

>

<div

style={{

display:"flex",

justifyContent:"space-between",

alignItems:"center",

marginBottom:"80px"

}}

>

<div>

<img
src="/logo.png"
width={70}
/>

</div>

<div

style={{

display:"flex",

gap:"40px",

fontWeight:600

}}

>

<p>Products</p>

<p>Demo</p>

<p>Resources</p>

<p>Login</p>

<button

style={{

padding:"12px 20px",

background:"#2f36ff",

color:"white",

border:"none",

borderRadius:"10px"

}}

>

START

</button>

</div>

</div>

<div

style={{

textAlign:"center"

}}

>

<h1

style={{

fontSize:"72px",

fontWeight:800

}}

>

Detect Deepfakes

Automatically

</h1>

<p

style={{

fontSize:"26px",

maxWidth:"1000px",

margin:"auto",

color:"#475569"

}}

>

DeepShield AI is a free AI platform that helps identify manipulated images, videos, audio and media content to reduce misinformation and digital fraud.

</p>

<br/>

<div

style={{

display:"flex",

justifyContent:"center",

gap:"20px"

}}

>

{

["IMAGE",

"VIDEO",

"AUDIO",

"URL"]

.map(

(item)=>(

<button

key={item}

onClick={()=>{

setMedia(

item

.toLowerCase()

)

}}

style={{

padding:"18px 45px",

borderRadius:"40px",

border:"none",

fontSize:"18px",

background:

media===

item

.toLowerCase()

?

"#3137ff"

:

"white"

}}

>

{

item

}

</button>

)

)

}

</div>

</div>

<div

style={{

display:"grid",

gridTemplateColumns:

"1fr 1fr",

marginTop:"80px",

gap:"40px"

}}

>

<div>

{

preview

?

media==="image"

?

<img

src={preview}

style={{

width:"100%",

borderRadius:"20px"

}}

/>

:

media==="video"

?

<video

controls

width="100%"

>

<source

src={preview}

/>

</video>

:

<audio

controls

style={{

width:"100%"

}}

>

<source

src={preview}

/>

</audio>

:

<div

style={{

height:"500px",

background:"#dbeafe",

borderRadius:"20px"

}}

>

</div>

}

</div>

<div

style={{

background:"white",

padding:"40px",

borderRadius:"25px",

border:

"1px solid #e2e8f0"

}}

>

<h2>

Upload File

</h2>

<label

style={{

display:"block",

padding:"100px",

border:

"2px dashed #cbd5e1",

textAlign:"center",

borderRadius:"20px"

}}

>

Choose File

<input

hidden

type="file"

accept={

media==="image"

?

"image/*"

:

media==="video"

?

"video/*"

:

media==="audio"

?

"audio/*"

:

"*"

}

onChange={(e)=>{

const selected=

e.target.files?.[0]

if(selected){

setFile(

selected

)

setPreview(

URL.createObjectURL(

selected

)

)

}

}}

>

</input>

</label>

<br/>

<button

onClick={upload}

style={{

width:"100%",

padding:"20px",

background:"#3137ff",

color:"white",

border:"none",

borderRadius:"15px",

fontSize:"18px"

}}

>

{

loading

?

"Analyzing..."

:

"Analyze"

}

</button>

<br/>

<br/>

<h3>

Result Dashboard

</h3>

<p>

Prediction:

{result||"--"}

</p>

<p>

Confidence:

{confidence}%

</p>

<p>

Processing:

{time}

sec

</p>

</div>

</div>

<div

style={{

marginTop:"150px",

textAlign:"center"

}}

>

<h1>

How To Use

</h1>

<br/>

<div

style={{

display:"flex",

gap:"20px"

}}

>

{

[

"Upload",

"AI Analysis",

"View Result",

"Export"

]

.map(

(step)=>(

<div

key={step}

style={{

flex:1,

background:"white",

padding:"40px",

borderRadius:"20px"

}}

>

<h2>

{step}

</h2>

</div>

)

)

}

</div>

</div>

<div

style={{

marginTop:"120px"

}}

>

<h1>

Frequently Asked Questions

</h1>

<br/>

<h3>

What is Deepfake?</h3>

<p>

AI generated manipulated media.

</p>

<h3>

How does this work?</h3>

<p>

Upload and AI analyzes patterns.

</p>

<h3>

Is my data safe?</h3>

<p>

Files are not stored.

</p>

</div>

<div

style={{

marginTop:"120px"

}}

>

<h1>

Why Trust DeepShield AI

</h1>

<div

style={{

display:"flex",

gap:"20px"

}}

>

{

[

"Fast",

"Private",

"AI Accuracy"

]

.map(

(item)=>(

<div

key={item}

style={{

flex:1,

padding:"40px",

background:"white",

borderRadius:"20px"

}}

>

<h2>

{

item

}

</h2>

</div>

)

)

}

</div>

</div>

</div>

)

}
