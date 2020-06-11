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
} from 'native-base';
import {Alert, Button} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <Container>
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
            <Button
              title="Press me"
              color="#f194ff"
              onPress={() => Alert.alert('Button with adjusted color pressed')}
            />
          </Form>
        </Content>
      </Container>
    );
  }
}

export default App;
