'use client'

import {useEffect, useState} from "react";
import {title} from "@/app/styles";

const code = `
const [innerWidth, setInnerWidth] = useState(0);
useEffect(() => {
    setInnerWidth(window.innerWidth);
}, []);
`

export const IndirectWindow = () => {
    const [innerWidth, setInnerWidth] = useState(0);
    useEffect(() => {
        setInnerWidth(window.innerWidth)
    }, [])

    return (
        <div className={'block client text-lg'}>
            <p>window.innerWidth: {String(innerWidth)}</p>
            <p>Эта страница уже не возвращает 500ку, а использует useEffect + useState</p>
            <pre>
              <code>{code}</code>
            </pre>
        </div>
    )
}