import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FcDocument } from 'react-icons/fc';

const SocialButtons = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center the buttons horizontally
    margin: 40
  };

  const buttonStyle = {
    borderRadius: '50%', // Make the button circular
    width: '50px', // Set the width of the button
    height: '50px', // Set the height of the button
    backgroundColor: '#333', // Background color of the button
    color: '#fff', // Text color
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px', // Margin between buttons
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <a href="https://github.com/ak2697" style={buttonStyle}>
        <FaGithub size={24} />
      </a>
      <a href="https://www.linkedin.com/in/ak2697/" style={buttonStyle}>
        <FaLinkedin size={24} />
      </a>
      <a href="https://drive.google.com/file/d/1e96Uf9V7WVnvQZMniV1tMNbDRSaxQTKj/view?usp=drive_link" style={buttonStyle}>
        <FcDocument size={24} />
      </a>
    </div>
  );
};

export default SocialButtons;
