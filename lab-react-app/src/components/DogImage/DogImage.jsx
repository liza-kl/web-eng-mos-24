import { useParams } from "react-router";
import ImageDisplay from '../ImageDisplay/ImageDisplay';

const DogImage = () => {
  const { statusCode } = useParams(); // Use useParams to get the status code from the URL
  const imageUrl = `https://http.dog/${statusCode}.jpg`;

  return (
    <div>
      <h2>Dog Image for Status Code: {statusCode}</h2>
      <ImageDisplay imageUrl={imageUrl} />
    </div>
  );
};

export default DogImage;