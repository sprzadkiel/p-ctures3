import imageShow from  './imageShow'
import './ImageList.css'

function imageList(( images )){
  const rederimage = image.map((image) => {
    return <imageShow key={image.id} image={image}/>
  })


  return(
    <div>
      {renderImage}
      </div>
  )
}
