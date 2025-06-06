const Button = ({ message }) => {
    console.log(message)
  return (
    <button
      onClick={() => {
        alert(message);
      }}
    >
      Click Me
    </button>
  );
};
const Profile = () => {
  return (
    <div>
      <Button message="event have access to this message" />
    </div>
  );
};

export default Profile;
