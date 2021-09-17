import React, { useRef, useEffect } from 'react'

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

        function reconstruction() {
            const pixels = imageData.data;
            const numPixels = imageData.width * imageData.height;

            for (let i = 0; i < numPixels; i++) {
                const r = pixels[i * 4];
                const g = pixels[i * 4 + 1];
                const b = pixels[i * 4 + 2];

                const container = containerEl.current;
                const div = document.createElement("div")
                div.className = "divPixel"
                container.appendChild(div);
                container.style.width = imageData.width + "px";
                container.style.height = imageData.height + "px";

                div.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
            }

        };

        reconstruction()
    }, [image])

    return (
        <div>
            <div>
                <h3>Imagen original</h3>
               <canvas ref={canvasEl}></canvas> 
            </div>
            <div ref={containerEl}>
                <h3>Imagen reconstruida</h3>
            </div>
        </div>
    )
}

export default ProcessingImg
