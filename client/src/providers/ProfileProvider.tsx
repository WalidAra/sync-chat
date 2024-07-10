import { useAuth } from "../hooks/useAuth";

const ProfileProvider = () => {
  const { token } = useAuth();

  return <div>ProfileProvider</div>;
};

export default ProfileProvider;
