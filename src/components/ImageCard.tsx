import { HandThumbUpIcon } from '@heroicons/react/24/outline';

const ImageCard = ({ image }: { image: any }) => {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg h-auto cursor-pointer">
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-4 flex items-center justify-between">
        <img
          src={image.user.profile_image.small}
          alt={image.id}
          className="rounded-full"
        />
        <div>
          <h2 className="text-lg font-semibold">{image.user.name}</h2>
          <p className="flex items-center text-sm text-gray-500">
            <HandThumbUpIcon className="h-5 w-5 text-gray-400 mr-2" />{' '}
            {image.likes}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
