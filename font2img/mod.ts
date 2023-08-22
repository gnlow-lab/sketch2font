import { createCanvas, Fonts } from "https://deno.land/x/skia_canvas@0.5.4/mod.ts"

const canvas = createCanvas(100, 100)

Fonts.registerDir("fonts")

const ctx = canvas.getContext("2d")

const save =
    (char: string) => {
        ctx.fillStyle = "white"
        ctx.fillRect(0, 0, 100, 100)

        ctx.font = "80px noto serif, noto serif kr"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(char, 50, 45)

        const num = char.charCodeAt(0).toString().padStart(4, "0")
        const hex = char.charCodeAt(0).toString(16).padStart(4, "0").toUpperCase()
        const filename = `dist/${num}_u${hex}_${char}.png`
        console.log(filename)
        canvas.save(filename)
    }

function* range(a: string, b: string) {
        for (
            let i = a.charCodeAt(0);
            i <= b.charCodeAt(0);
            i++
        ) {
            yield String.fromCharCode(i)
        }
    }

import { $ } from "https://deno.land/x/iteruyo@v0.3.0/mod.ts"
$(range("A", "Z")).forEach(save)
$(range("a", "z")).forEach(save)