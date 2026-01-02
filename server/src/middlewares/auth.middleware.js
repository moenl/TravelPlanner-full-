export const requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader !== "Bearer logged-in-user") {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};
