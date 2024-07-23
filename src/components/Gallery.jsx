import React, { useState } from 'react';
import './Gallery.css';
import { BsZoomIn } from 'react-icons/bs';

const img1 = 'https://www.hotamchickmaker.com/gallery_images/34bef707b823e1.jpg';
const img2 = 'https://www.hotamchickmaker.com/gallery_images/bea9c08f41cbcf.jpeg';
const img3 = 'https://www.hotamchickmaker.com/gallery_images/59ed060dd789c5.jpeg';
const img4 = 'https://www.hotamchickmaker.com/gallery_images/34bef707b823e1.jpg';
const img5 = 'https://www.hotamchickmaker.com/gallery_images/34bef707b823e1.jpg';
const img6 = 'https://www.hotamchickmaker.com/gallery_images/34bef707b823e1.jpg';
const img7 = 'https://www.hotamchickmaker.com/gallery_images/34bef707b823e1.jpg';
const img8 = 'https://www.hotamchickmaker.com/gallery_images/bea9c08f41cbcf.jpeg';
const img9 = 'https://www.hotamchickmaker.com/gallery_images/59ed060dd789c5.jpeg';
const img10 = 'https://www.hotamchickmaker.com/gallery_images/34bef707b823e1.jpg';
const img11 = 'https://www.hotamchickmaker.com/gallery_images/34bef707b823e1.jpg';
const img12 = 'https://www.hotamchickmaker.com/gallery_images/34bef707b823e1.jpg';

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showPrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="gallery-container">
      {/* <h2 className="text-3xl font-bold textnte-cer mb-6">Gallery</h2> */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 border-b-2 border-gray-200 pb-2">
  Gallery
</h2>

       
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery ${index}`} />
            <div className="overlay" onClick={() => openModal(index)}>
              <div className="overlay-icon">
                <BsZoomIn /> {/* Zoom in icon */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          <div className="modal-content">
            <button className="prev" onClick={showPrevImage}>&#10094;</button>
            <img src={images[currentIndex]} alt={`Gallery ${currentIndex}`} />
            <button className="next" onClick={showNextImage}>&#10095;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
