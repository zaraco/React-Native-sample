import React from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
  Button,
} from 'native-base';
import {default as Alert, StyleSheet, View} from 'react-native';

function Separator() {
  return <View style={styles.separator} />;
}

class App extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Separator />
            <Button transparent>
              <Text>Dark</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 16,
  },
  button: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
