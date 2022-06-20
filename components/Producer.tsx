import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />

const Producer = () => (
  <Card>
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
    <Card.Content>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={{ width: 300, height: 300 }} />
      <Card.Title title="Card Title" subtitle="Card Subtitle" />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card.Content>
  </Card>
);

export default Producer