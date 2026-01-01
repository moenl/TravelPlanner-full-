import bcrypt from "bcryptjs";

const password = "123456"; // your test password
const hashed = await bcrypt.hash(password, 10);

console.log("Password:", password);
console.log("Hashed:", hashed);
