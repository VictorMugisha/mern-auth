import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  const { auth_token_jwt: token } = req.cookies;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized - no token provided" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized - invalid token" });
    }
    req.userId = decoded.userId;

    next();
  } catch (error) {
    console.error("Error in verify token: ", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
