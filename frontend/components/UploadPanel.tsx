type Props={

preview:string

setFile:any

setPreview:any

analyze:any

reset:any

}

export default function UploadPanel({

preview,

setFile,

setPreview,

analyze,

reset

}:Props){

function handle(e:any){

const f=e.target.files?.[0]

if(!f)return

setFile(f)

setPreview(

URL.createObjectURL(f)

)

}

return(

<div
style={{

background:"white",

padding:"32px",

borderRadius:"28px"

}}
>

<h2>

Upload Media

</h2>

<div
style={{

marginTop:"20px",

height:"420px",

border:"2px dashed #bcd0ff",

borderRadius:"28px",

display:"flex",

justifyContent:"center",

alignItems:"center",

overflow:"hidden",

cursor:"pointer"

}}
>

{

preview

?

<img

src={preview}

style={{

width:"100%",

height:"100%",

objectFit:"contain"

}}

/>

:

<label
style={{

textAlign:"center"

}}
>

<div
style={{

fontSize:"70px"

}}
>

☁️

</div>

<h2>

Drag & Drop

</h2>

<p>

Click to Upload

</p>

<p>

PNG JPG MP4 WAV

</p>

<input

hidden

type="file"

accept="image/*,video/*,audio/*"

onChange={handle}

/>

</label>

}

</div>

<div
style={{

display:"flex",

gap:"12px",

marginTop:"20px"

}}
>

<button

onClick={analyze}

style={{

flex:1,

padding:"18px",

border:"none",

borderRadius:"16px",

background:"#2952ff",

color:"white"

}}

>

Analyze

</button>

<button

onClick={reset}

style={{

flex:1,

padding:"18px",

border:"none",

borderRadius:"16px"

}}

>

Upload Another

</button>

</div>

</div>

)

}