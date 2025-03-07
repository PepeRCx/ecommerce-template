import React, { useState, useRef, useEffect } from "react";
import './image-upload.css'
import { CloudUploadRounded } from "@mui/icons-material";
import supabase from "../../lib/helper/supabaseClient";

function ImageUpload({ uploadPressed }) {
    const [images, setImages] = useState(Array(5).fill(null));
    const fileInputs = useRef([]);

    const handleImageUpload = (event, index) => {
        const file = event.target.files[0];
    
        if (!file) return;

        if (file.size > 1024 * 1024) {
            alert("Image must be less than 1MB.");
            return;
        }

        const previewURL = URL.createObjectURL(file);

        setImages((prevImages) => { 
            const newImages = [...prevImages];
            newImages[index] = { file, previewURL };
            return newImages;
        });
  };

    const removeImage = (index) => {
        setImages((prevImages) => {
            const newImages = [...prevImages];
            newImages[index] = null;
            return newImages;
        });
    };

    useEffect(() => {
        if (uploadPressed) {
            uploadImage();
        }
    }, [uploadPressed]);

    const uploadImage = async () => {
        const uploadedFiles = images
            .filter(img => img !== null &&  img.file)
            .map(img => img.file);

        if (uploadedFiles.length === 0) {
            alert("No new images to upload");
            return;
        }

        for (let file of uploadedFiles) {
            const fileName = `${Date.now()}_${file.name}`;

            const { data, error } = await supabase
                .storage
                .from('ecommerce_gallery')
                .upload(`images/${fileName}`, file, {
                    cacheControl: '3600',
                    upsert: false
                });

            if (error) {
                alert('Error uploading image: ' + error.message);
                continue;
            }
        }

        alert('Images uploaded successfully');

    };

  return (
    <div className="container">
        <p className="message">Puedes subir un maximo de 5 imagenes y 1mb de peso cada uno</p>
        <div className="boxes-container">
        {images.map((src, index) => (
            <div className="image-upload" key={index}>
                <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={(el) => (fileInputs.current[index] = el)}
                onChange={(event) => handleImageUpload(event, index)}
                />
                <div className="image-preview"
                onClick={() => (src ? removeImage(index) : fileInputs.current[index].click())}
                style={{
                backgroundColor: src ? "transparent" : "#f0f0f0",
                }}
                >
                {src ? (
                    <img
                    src={src.previewURL}
                    alt={`preview ${index}`}
                    width="100%"
                    height="100%"
                    style={{ objectFit: "cover" }}
                    />
                ) : (
                    <div className="upload-label">
                        <CloudUploadRounded />
                        <span style={{ color: "gray", fontSize: "12px" }}>Cargar Imágen</span>
                    </div>
                )}
            </div>
            </div>
        ))}
        </div>
    </div>
  );
}

export default ImageUpload;
