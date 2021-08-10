import { getSession, session } from 'next-auth/client';
import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {

  if (!session) return <Login />;

  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>
      
      <Header />

      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </main>

    </div>
  );
}

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);

  return{
    props:{
      session
    }
  }
}