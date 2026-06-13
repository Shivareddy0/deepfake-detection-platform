"use client"

import { useState } from "react"

import Header from "../components/Header"
import MediaTabs from "../components/MediaTabs"
import UploadPanel from "../components/UploadPanel"
import ResultDashboard from "../components/ResultDashboard"
import AnalysisWorkspace from "../components/AnalysisWorkspace"
import StatisticsPanel from "../components/StatisticsPanel"
import Timeline from "../components/Timeline"
import EvidencePanel from "../components/EvidencePanel"
import ForensicReport from "../components/ForensicReport"
import HeatmapViewer from "../components/HeatmapViewer"
import UrlAnalysis from "../components/UrlAnalysis"
import WebcamPanel from "../components/WebcamPanel"
import ExportDashboard from "../components/ExportDashboard"
import ExportPanel from "../components/ExportPanel"

export default function Home(){

const [media,setMedia]=
useState("image")

const [file,setFile]=
useState<File|null>(null)

const [preview,setPreview]=
useState("")

const [result,setResult]=
useState("--")

const [confidence,setConfidence]=
useState(0)

const [time,setTime]=
useState("0")

async function analyze(){

setResult("FAKE")

setConfidence(92)

setTime("0.04")

}

function reset(){

setFile(null)

setPreview("")

setResult("--")

setConfidence(0)

setTime("0")

}

return(

<div
style={{

background:"#f8fafc",

minHeight:"100vh",

padding:"50px"

}}
>

<Header/>

<MediaTabs

media={media}

setMedia={setMedia}

/>

<div
style={{

display:"grid",

gridTemplateColumns:

"1fr 1fr",

gap:"30px"

}}
>

<UploadPanel

preview={preview}

setFile={setFile}

setPreview={setPreview}

analyze={analyze}

reset={reset}

/>

<ResultDashboard

result={result}

confidence={confidence}

time={time}

/>

</div>

<br/>

<AnalysisWorkspace/>

<br/>

<StatisticsPanel/>

<br/>

<Timeline/>

<br/>

<div
style={{

display:"grid",

gridTemplateColumns:

"1fr 1fr",

gap:"30px"

}}
>

<HeatmapViewer/>

<EvidencePanel/>

</div>

<br/>

<div
style={{

display:"grid",

gridTemplateColumns:

"1fr 1fr",

gap:"30px"

}}
>

<UrlAnalysis/>

<WebcamPanel/>

</div>

<br/>

<ForensicReport/>

<br/>

<ExportDashboard/>

<br/>

<ExportPanel/>

<div
style={{
height:"60px"
}}
>

</div>

</div>

)

}
