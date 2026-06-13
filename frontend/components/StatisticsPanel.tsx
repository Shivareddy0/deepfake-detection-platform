export default function StatisticsPanel(){

const cards=[

["Media","1"],

["Detected","1"],

["Risk","Medium"],

["Confidence","92%"]

]

return(

<div style={{

display:"grid",

gridTemplateColumns:"repeat(4,1fr)",

gap:20

}}>

{

cards.map(

(card)=>(

<div

key={card[0]}

style={{

background:"white",

padding:"30px",

borderRadius:"24px"

}}

>

<div style={{

color:"#64748b"

}}>

{card[0]}

</div>

<h1>

{card[1]}

</h1>

</div>

)

)

}

</div>

)

}