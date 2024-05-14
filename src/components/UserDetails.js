import { FaGraduationCap } from 'react-icons/fa';
import { FcReadingEbook, FcAddressBook, FcCellPhone, FcMusic } from 'react-icons/fc';

const UserDetails = () => {
  const iconStyle = {
    marginRight: '0.5em', // Add some space between the icon and text
    fontSize: '1.5em', // Increase the size of the icon
  };

  const containerStyle = {
    backgroundColor: 'rgba(133, 133, 133, 0.7)', // Lighter black background color with some opacity
    padding: '20px', // Add padding to the container
    borderRadius: '10px', // Add border radius for rounded corners
  };

  return (
    <div style={containerStyle}>
      <h4>
        <FaGraduationCap style={iconStyle} />
        Masters in Computer Science
      </h4>
      <h4>
        <FcReadingEbook style={iconStyle} />
        Arizona State University
      </h4>
      <h4>
        <FcAddressBook style={iconStyle} />
        akuma347@asu.edu
      </h4>
      <h4>
        <FcCellPhone style={iconStyle} />
        +1 (480)-798-8547
      </h4>
      <h4>
        <FcMusic style={iconStyle} />
        Listening to music
      </h4>
    </div>
  );
};

export default UserDetails;
