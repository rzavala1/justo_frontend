import { Typography } from '@mui/material';
import Layout from '../components/@templates/Layout';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Typography variant="h1" align="center" gutterBottom>
        Welcome to My Appk
      </Typography>
    </Layout>
  );
};

export default HomePage;
