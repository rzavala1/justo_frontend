import { useMutation, gql } from '@apollo/client';
import { LOGIN_USER } from "../apollo/mutations/AuthMutation";
import Cookie from "js-cookie";


export function useLoginService() {
  const [loginMutation, { loading, error }] = useMutation(LOGIN_USER);

  async function login(email: string, password: string) {
    try {
      const { data } = await loginMutation({
        variables: {
          email: email,
          password: password,
        },
      });
      Cookie.set("token", data.login);
    } catch (error) {
      console.error(error);
    }
  }

  return { login, loading, error };
}
