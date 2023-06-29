import { CREATE_HIT, UPDATE_HIT } from '@/apollo/mutations/HitsMutation';
import { HITS_QUERY, HIT_BY_ID_QUERY } from '@/apollo/queries/HitsQuery';
import { HitData } from '@/types/HitsTypes';
import {useMutation, useQuery } from '@apollo/client';


export function useHitsService() {
  const { data } = useQuery(HITS_QUERY);
  const [createMutation] = useMutation(CREATE_HIT);
  const [updateMutation] = useMutation(UPDATE_HIT);

  async function update(hitData:HitData, hitId:string) {
    try {
      const { data } = await updateMutation({
        variables:{
          id:Number(hitId),
          data:hitData
        }
      });
    } catch (error) {
      throw error;
    }
  }


  async function create(hitData:HitData) {
    try {
      const { data } = await createMutation({
        variables:{
          data:hitData
        }
      });
    } catch (error) {
      throw error;
    }
  }

  
  return { data , update};
}
