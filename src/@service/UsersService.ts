import { useMutation, gql, useQuery } from '@apollo/client';
import { LOGIN_USER,REGISTER_USER } from "../apollo/mutations/AuthMutation";
import Cookie from "js-cookie";
import { userData } from '../types/UserTypes';
import { USERS_QUERY } from '@/apollo/queries/UsersQuery';


export function useUsersService() {
  const { data } = useQuery(USERS_QUERY);
  const [registerMutation,{ error }] = useMutation(REGISTER_USER);

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

  return { data };
}
