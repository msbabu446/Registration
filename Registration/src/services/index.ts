import { TUserVerify } from "./types";

/* Sample function to create async api action */
function verifyUser({ email, password }: TUserVerify) {
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@test.com" && password === "Test@123") {
        resolve(true);
      } else {
        reject(false);
      }
    }, 2000);
  });
}

export default verifyUser;
