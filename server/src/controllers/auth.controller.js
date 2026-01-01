import { setLoggedIn } from "../middlewares/auth.middleware.js";

export const login = async (req, res) => {
  const { email, password } = req.body || {};

  const FIXED_EMAIL = "test@test.com";
  const FIXED_PASSWORD = "123456";

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  if (email === FIXED_EMAIL && password === FIXED_PASSWORD) {
    setLoggedIn(); // ✅ mark user as logged in

    return res.json({
      message: "Login successful",
      user: { id: 1, name: "Test User", email: FIXED_EMAIL },
    });
  }

  return res.status(401).json({ message: "Invalid credentials" });
};
