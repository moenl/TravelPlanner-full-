// TEMP authentication (Phase 2)

export const login = async (req, res) => {
  const { email, password } = req.body || {};

  const FIXED_USER = {
    id: 1,
    name: "Test User",
    email: "test@test.com",
    password: "123456",
  };

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required",
    });
  }

  if (
    email === FIXED_USER.email &&
    password === FIXED_USER.password
  ) {
    return res.json({
      message: "Login successful",
      token: "logged-in-user", // simple token
      user: {
        id: FIXED_USER.id,
        name: FIXED_USER.name,
        email: FIXED_USER.email,
      },
    });
  }

  return res.status(401).json({ message: "Invalid credentials" });
};

// Registration disabled
export const register = async (req, res) => {
  return res.status(403).json({
    message: "Registration is disabled for this project phase",
  });
};
