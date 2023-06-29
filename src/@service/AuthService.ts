import { useMutation, gql } from '@apollo/client';
import { LOGIN_USER,REGISTER_USER } from "../apollo/mutations/AuthMutation";
import Cookie from "js-cookie";
import { userData } from '../types/UserTypes';


export function useLoginService() {
  const [loginMutation] = useMutation(LOGIN_USER);
  const [registerMutation,{ error }] = useMutation(REGISTER_USER);

  async function login(email: string, password: string) {
    try {
      
      const { data } = await loginMutation({
        variables: {
          email: email,
          password: password,
        },
      });
      Cookie.set("Authorization", data.login);

    } catch (error) {
      console.error(error);
    }
  }

  async function register(userData:userData) {
    try {
      const { data } = await registerMutation({
        variables:{
          userData
        }
      });
    } catch (error) {
      throw error;
    }
  }

  return { login, register };
}
