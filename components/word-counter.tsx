"use client"; 
import React, { useState, ChangeEvent } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function WordCounterComponent() {
const [text,setText]=useState<string>("")
const handleTextChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
setText(e.target.value)
}
const clearText=()=>{
    setText("")
}

const wordCount=text.trim().split(/\s+/).filter((word)=>word).length

const charCount=text.length

return(
<>

<div className="flex flex-col h-screen items-center justify-center bg-gradient-to-t from-[#434673] to-[#788464]">
<Card className="p-3 max-w-md w-full rounded-lg shadow-lg ">
    <CardHeader>
        <CardTitle className="text-center">
            Text Analysis
        </CardTitle>
        <CardDescription className="text-center">
        Enter text and see the word and character count.
        </CardDescription>
    </CardHeader>

    <CardContent>
        <Textarea
        value={text}
        placeholder="Enter the Text here to analyse"
        id="text"
        onChange={handleTextChange}
        className="h-32 resize-none"/>

        <div className="flex justify-between mt-7">
<div><p className="text-muted-foreground">{wordCount} words, {charCount} characters</p></div>
<div>
    <Button
    onClick={clearText}>Clear</Button>
</div>
        </div>
    </CardContent>
</Card>
</div>
</>
)

}