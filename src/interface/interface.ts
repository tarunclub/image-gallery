interface UnsplashImage {
  id: string;
  urls: {
    regular: string;
    // Add other URL properties as needed
  };
  alt_description: string;
  user: {
    name: string;
    instagram_username: string | null;
    // Add other user properties as needed
  };
  likes: number;
  description: string | null;
  location: {
    name: string;
  } | null;
  // Add other image properties as needed
  // For example: categories, tags, etc.
}

export default UnsplashImage;
