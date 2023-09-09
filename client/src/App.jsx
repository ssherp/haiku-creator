// import required modules
import { 
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';

// Construct our primary GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

function App() {
  const [count, setCount] = useState(0)

  return (

  )}

export default App