import React from 'react';
import './Add_movie_details.css';
import Button from 'react-bootstrap/Button';
import { useRef } from 'react';




function Add_movie_details() {
  const fileInputRef = useRef(null);
  const img =useRef(null);
  
  const Added_movie = async () => {
  
    console.log('movie added')
    return;
  }
  const Add_movie = (e) => {
    const selectedFile = e.target.files[0];
    // Do something with the selected file, like uploading it or displaying its details
    console.log('Selected file:', selectedFile);
  };
  const Add_image=(e) =>{
    const s = e.target.files[0];
    console.log("file : ",s);
  };
  return (
    
    <div className="container mt-5">
            
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body square-form-bg"> 
                  <h5 className="card-title">Movie</h5>
                  <form>
                    <div className="form-group">
                     
                      <input
                        type="text"
                        className="form-control square-input"
                        id="movie_name"
                        placeholder="Enter movie Name "
                      />
                    </div><br></br>

                    <div className="form-group">
                    <input
        type="file"
        accept=".mp4" // You can specify the allowed file types here
        onChange={Add_movie}
        style={{ display: 'none' }}
        ref={fileInputRef}
      />
      <button onClick={() => fileInputRef.current.click()} type="button" id='moviebtn'>UPLOAD MOVIE</button>
                     
                   </div><br></br>

                   <div className="form-group">
                    <input
        type="file"
        accept="image/*" // You can specify the allowed file types here
        onChange={Add_image}
        style={{ display: 'none' }}
        ref={img}
      />
      <button onClick={() => img.current.click()} type="button" id='imagebtn'>UPLOAD IMAGE</button>
                     
                   </div><br></br>
                   <Button onClick={Added_movie}
                   variant="warning" id='addbtn'>ADD</Button>
                    
                   
                  </form>
                </div>
              </div>
            </div>
          </div><br></br>
          <div className="anchor">
          
        </div>
        
        </div>
  )
}

export default Add_movie_details