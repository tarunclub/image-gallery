import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import ImageCard from './ImageCard';
import Modal from './Modal';
import UnsplashImage from '../interface/interface';

interface ImagesListProps {
  search: string;
}

export default function ImagesList({ search }: ImagesListProps) {
  const [images, setImages] = useState<UnsplashImage[]>([]); // Updated type
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(
    null
  ); // Updated type

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        let apiUrl = 'https://api.unsplash.com/photos';

        if (search) {
          apiUrl = `https://api.unsplash.com/search/photos?query=${search}`;
        }

        const res = await axios.get(apiUrl, {
          headers: {
            Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_API_KEY}`,
          },
        });

        setImages(res.data.results || res.data);

        setLoading(false);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchImages();
  }, [search]);

  const setModalImage = useCallback(
    (image: UnsplashImage) => {
      setShowModal(true);
      setSelectedImage(image);
    },
    [setShowModal]
  );

  return (
    <div className="m-4">
      {loading ? (
        <h1 className="flex items-center justify-center h-screen font-semibold text-4xl">
          Loading...
        </h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image: UnsplashImage) => (
            <div key={image.id} onClick={() => setModalImage(image)}>
              <ImageCard image={image} />
            </div>
          ))}
        </div>
      )}
      {error && <h1>{error}</h1>}
      {selectedImage && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          image={selectedImage}
        />
      )}
    </div>
  );
}
