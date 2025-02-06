
const ImageDisplay = ({ imageUrl }) => {
  return (
    <div style={styles.container}>
      {imageUrl ? (
        <img src={imageUrl} alt="HTTP Status Dog" style={styles.image} />
      ) : (
        <p>Please enter a status code to see the image.</p>
      )}
    </div>
  );
};

// Simple styles for the image display
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20px',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
};

export default ImageDisplay;
