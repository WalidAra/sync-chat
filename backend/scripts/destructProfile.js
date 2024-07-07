const destructProfile = (user) => {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
  };
};

module.exports = destructProfile;
