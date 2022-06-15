import { Env } from '~/constants';

function Home() {
  console.log(Env.APP_BASE_URL, process.env.APP_BASE_URL);
  return <div>Home</div>;
}

export default Home;
