import React,{useRef, useEffect} from 'react'

const ProcessingImg = ({image}) => {

   const canvasEl = useRef(null)
   
  
   useEffect(() => {
      
    // console.log(image)
       const canvas = canvasEl.current
       const context = canvas.getContext('2d');
       console.log(context)

       const img = new Image();
       img.src = image
       console.log(img.width)
       console.log(img.height)

    //    const img = document.getElementById('img');

    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0);

    const imageData = context.getImageData(0, 0, img.width, img.height);
    console.log(imageData.data)

       return () => {
         
       }
   }, [image])




    return (
        <div>
            <canvas ref={canvasEl}>

            </canvas>
        </div>
    )
}

export default ProcessingImg
