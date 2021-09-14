import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { StyleSheet, Text, View } from 'react-native';
import { useGetFrontendVersionQuery } from './__generated__/graphql/datamodel.gen';
import { getClient, setupClient } from './graphql/client';


const FrontendVersion = () => {
  const { data } = useGetFrontendVersionQuery({
    client: getClient()
  });
  
  return (
    <View>{data?.getFrontendVersion.version}</View>
  )
}

export default function App() {

  const [graphqlClient, setGraphqlClient] = React.useState();

  React.useEffect(() => {
    const setup = async () => {
      const _graphqlclient = await setupClient();
      // @ts-ignore
      setGraphqlClient(_graphqlclient);
    }
    setup();
  }, []);

  return (
    // @ts-ignore
    <ApolloProvider client={graphqlClient}>
      <View style={styles.container}>
            <Text><FrontendVersion/></Text>
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
