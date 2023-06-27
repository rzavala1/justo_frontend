import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../apollo/mutations/AuthMutation";

const login = async (email: string, password: string) => {
   
   
  };

const logout = async () => {
  return null;
};

const UserService = {
    login,
  logout,
};

export default UserService;
