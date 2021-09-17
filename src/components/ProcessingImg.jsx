import React, { useRef, useEffect, useState } from 'react'

const ProcessingImg = ({ image }) => {

    const canvasEl = useRef(null)
    const containerEl = useRef(null)



    useEffect(() => {
        const canvas = canvasEl.current;
        const context = canvas.getContext('2d');

        const img = new Image();
        img.src = image

        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);

        const imageData = context.getImageData(0, 0, img.width, img.height);

      
        function reconstruction () {
            const pixels = imageData.data;
            const numPixels = imageData.width * imageData.height;
    
    
            for (let i = 0; i < numPixels; i += 1) {
                const r = pixels[i*4];
                const g = pixels[i*4 + 1];
                const b = pixels[i*4 + 2];
    
                pixels[i*4] = r;
                pixels[i*4 + 1] = g;
                pixels[i*4 + 2] = b;
    
                const container = containerEl.current;
                const div = document.createElement("div")
                div.className = "divPixel"
                container.appendChild(div);
                container.style.width = imageData.width + "px";
                container.style.height = imageData.height + "px";
    
                div.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
    
            }
    
            context.putImageData(imageData, 0, 0);
        };

        reconstruction()
    }, [image])

   

    return (
        <div>
            <canvas ref={canvasEl}></canvas>
            <div ref={containerEl}>
                
            </div>
        </div>
    )
}

export default ProcessingImg
