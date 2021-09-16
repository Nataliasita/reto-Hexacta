import React, { useRef, useEffect, useState } from 'react'

const ProcessingImg = ({ image }) => {

    const canvasEl = useRef(null)

    const [pixels, setPixels] = useState([]);
    // const [numPixels, setNumPixels] = useState(0);


    useEffect(() => {

        const canvas = canvasEl.current;
        const context = canvas.getContext('2d');

        const img = new Image();
        img.src = image

        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);

        const imageData = context.getImageData(0, 0, img.width, img.height);
        console.log(imageData)

        setPixels(imageData.data);
        // const numPixels = imageData.width * imageData.height;

        context.putImageData(imageData, 0, 0);

        return () => {

        }
    }, [image])

    const pixelsUnd = () => {
        pixels.map(i => {
            const r = pixels[i * 4];
            const g = pixels[i * 4 + 1];
            const b = pixels[i * 4 + 2];

            pixels[i * 4] = r;
            pixels[i * 4 + 1] = g;
            pixels[i * 4 + 2] = b;

            // const div = document.createElement("div")
            // div.className = "divPixel"
            // container.appendChild(div);
            // container.style.width = imageData.width + "px";
            // container.style.height = imageData.height + "px";

            // div.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
        })

    }

    return (
        <div>
            <canvas ref={canvasEl}></canvas>
            <div>
                {
                    pixels.map(i => (

                        <div key={i}>
                            
                        </div>

                            // const div = document.createElement("div")
                            // div.className = "divPixel"
                            // container.appendChild(div);
                            // container.style.width = imageData.width + "px";
                            // container.style.height = imageData.height + "px";

                            // div.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
                            // )
                    ))
                }
            </div>
        </div>
    )
}

export default ProcessingImg
