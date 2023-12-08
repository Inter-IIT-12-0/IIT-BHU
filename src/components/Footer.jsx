"use client"

import { useState } from "react";
import Bot from "./Bot";
import {ChatbotCard} from "./ChatbotCard";

export default function Footer() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="fixed right-16 bottom-12 z-40">
            <Bot isOpen={isOpen} setIsOpen={setIsOpen}/>
            {
                // isOpen? 
                <ChatbotCard isOpen={isOpen}/>
                // <></>
            }
        </div>
    );
}