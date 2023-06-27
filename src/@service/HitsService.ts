import { HITS_QUERY } from '@/apollo/queries/HitsQuery';
import {useQuery } from '@apollo/client';


export function useHitsService() {
  const { loading, error, data } = useQuery(HITS_QUERY);

  async function getHits() {
    return data;
  }

  return { getHits };
}
