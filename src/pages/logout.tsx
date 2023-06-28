import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';

const LogoutPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    Cookie.remove('Authorization');
    router.push('/');
  }, [router]);

  return null; 
};

export default LogoutPage;
