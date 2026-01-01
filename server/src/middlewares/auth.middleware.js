let isLoggedIn = false;

export const setLoggedIn = () => {
  isLoggedIn = true;
};

export const requireAuth = (req, res, next) => {
  if (!isLoggedIn) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  next();
};
