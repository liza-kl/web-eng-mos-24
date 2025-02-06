const AnimalButton = ({ animal }) => {
  const handleClick = () => {
    console.log(`You clicked on the ${animal} button!`);
  };
  return (
    <button onClick={handleClick} style={styles.button}>
      {animal}
    </button>
  );
};
// Beispiel für JavaScript stylen
const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50', 
    color: 'white', 
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default AnimalButton;
