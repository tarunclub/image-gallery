import React from 'react';
import UnsplashImage from '../interface/interface';
import { HandThumbUpIcon } from '@heroicons/react/24/outline';

export default function Modal({
  showModal,
  setShowModal,
  image,
}: {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  image: UnsplashImage | null;
}) {
  if (!showModal || !image) {
    return null;
  }

  const { urls, alt_description, user, likes, description, location } = image;

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/* Content */}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/* Header */}
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl font-semibold">Image Details</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/* Body */}
          <div className="relative p-6 flex-auto">
            {urls && (
              <img
                src={urls.regular}
                alt={alt_description}
                className="w-full h-64 object-cover rounded-lg"
              />
            )}
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="flex items-center text-sm text-gray-500">
                <HandThumbUpIcon className="h-5 w-5 mr-2" />
                {likes}
              </p>
              <div className="text-sm text-gray-500 mt-2">
                <p>Description: {description || 'No description available'}</p>
                <p>Location: {location ? location.name : 'Not specified'}</p>
              </div>
            </div>
            <div className="mt-4">
              <p>instagram: {user.instagram_username || 'Not specified'}</p>
            </div>
          </div>
          {/* Footer */}
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
