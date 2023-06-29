import HitCreateForm from '@/components/@organisms/HitCreateForm';
import { useEffect } from 'react';
import Layout from '../../components/@templates/Layout';
import Cookie from "js-cookie";
import { useRouter } from 'next/router';
import { isIfStatement } from 'typescript';

const CreatePage: React.FC = () => {
  const router = useRouter();

  return (
    <Layout>
      <HitCreateForm />
    </Layout>
  );
};

export default CreatePage;
