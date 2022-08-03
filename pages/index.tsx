import type { NextPage } from 'next'
import 'bootstrap/dist/css/bootstrap.css';
import '../scripts/index.js'
import Layout from '../componets/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="Index">
      <h1>ddd</h1>
      <div className='cursor'></div>

    </Layout>
  )
}

export default Home
