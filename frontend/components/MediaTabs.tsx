type Props={

media:string

setMedia:(v:string)=>void

}

export default function MediaTabs({

media,

setMedia

}:Props){

return(

<div style={{

display:"flex",

justifyContent:"center",

gap:20,

marginBottom:40

}}>

{

[

"image",

"video",

"audio",

"url",

"webcam"

]

.map(

(item)=>(

<button

key={item}

onClick={()=>

setMedia(item)

}

style={{

padding:"18px 35px",

border:"none",

borderRadius:40,

background:

media===item

?

"#2952ff"

:

"white",

color:

media===item

?

"white"

:

"black"

}}

>

{

item.toUpperCase()

}

</button>

)

)

}

</div>

)

}