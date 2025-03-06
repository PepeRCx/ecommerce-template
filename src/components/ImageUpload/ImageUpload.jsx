import React, { useState } from "react";
import './image-upload.css'

function ImageUpload() {
    const [image, setImage] = useState(null);
    const [error, setError] = useState("");

    // Handle file input change
    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            if (file.size > 1 * 1024 * 1024) {
                setError("File size must be less than 1MB.");
                setImage(null);
                return;
            }

            setError("");

            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="container">
            <h2>Image Uploader</h2>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ marginBottom: "10px" }}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            {image && (
                <div className="img-area">
                    <h3>Preview:</h3>
                    <img
                        src={image}
                        alt="Uploaded Preview"
                    />
                </div>
            )}
        </div>
    );
}

export default ImageUpload;