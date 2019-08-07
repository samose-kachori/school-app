import React from 'react';
import Typography from "@material-ui/core/Typography";
import Dropzone from "react-dropzone";
import {storage} from "../config/firebase-config";
// Toastify message alert
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ImageUploader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            uploadedFirebaseImage: '',
            imageFirebaseRef: ''
        };
    }

    onImageDrop (files) {
        /* files would always be an array as per react */
        //console.log('logging the file name before setting to state ' + files[0].name);
        this.setState({
          uploadedFirebaseImage : files[0]
        });
        console.log("calling the firebase upload method");
        this.handleImageUpload(files[0]);
    }
    
      // Actually handling the image upload process here
    handleImageUpload (fileToUpload) {
        /* Image replacement logic -> delete-upload */
        // check if some image was already uploaded
        if (this.state.imageFirebaseRef !== '') {
          storage.ref(this.state.imageFirebaseRef).delete().then(
            () => {console.log('previous file deleted successfully ' + this.state.imageFirebaseRef)}
          ).catch(function(error) {
            console.log("error occurred while trying to delete the previous file " + error);
          });
        }
    
        // Generata a new file name for every upload
        let currentImageName = "firebase-image-" + Date.now();
        this.setState(
            {
                imageFirebaseRef: `images/${currentImageName}`
            });
        //console.log("image name we got: " + currentImageName);
    
        // we need to keep a reference of the toastId to be able to update it
        let toastId = null;
    
        // start the upload task
        let uploadImage = storage
          .ref(this.state.imageFirebaseRef)
          .put(fileToUpload);
    
        /* 
        TODO Do we need options of pause/ resume etc here?
        */
        // Listen for state changes, errors, and completion of the upload.
        uploadImage.on(
          "state_changed", // or firebase.storage.TaskEvent.STATE_CHANGED
          snapshot => {
            /*
            // Get task progress, 
            including the number of bytes uploaded 
            and the total number of bytes to be uploaded
            */
           var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
           //console.log('Upload is ' + progress + '% done');
    
           // Handle display of progress in Toast
           // check if we already displayed a toast
           if (toastId === null) {
             // create new toast for progress
             toastId = toast('Upload progress', {
               progress: progress,
               position: toast.POSITION.BOTTOM_CENTER
             });
           } else {
             // update existing toast with progress
            toast.update(toastId, {
              progress: progress
            })
           }
          }, 
          error => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            alert(error);
          },
          () => {
            // Upload completed successfully, now we can get the download URL
            storage
              .ref("images")
              .child(currentImageName)
              .getDownloadURL()
              .then(url => {
                this.setState({
                  uploadedFirebaseImage: url
                });
              });
    
            // Upload is done! 
            // The remaining progress bar will be filled up
            // The toast will be closed when the transition end
            toast.done(toastId);
          }
        );
    }

    render(){
        return (
            <React.Fragment>
                <Dropzone
                    multiple={false}
                    accept="image/*"
                    onDrop={this.onImageDrop.bind(this)}
                >
                {({ getRootProps, getInputProps }) => (
                    <section>
                    <div width="200px" height="200px" {...getRootProps()}>
                        <input {...getInputProps()} />
                        {this.state.uploadedFirebaseImage === '' ? (
                        <Typography>
                            Drag 'n' drop image file here, or click to select
                            file
                        </Typography>
                        ) : (
                        <div>
                            <img 
                                width="200" 
                                height="200"
                                alt="Student" 
                                src={this.state.uploadedFirebaseImage} />
                        </div>
                        )}
                    </div>
                    </section>
                )}
                </Dropzone>
                <ToastContainer autoClose = {false} />
            </React.Fragment>
        )
    }
}

export default ImageUploader;