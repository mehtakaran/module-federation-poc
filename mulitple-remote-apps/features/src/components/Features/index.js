import React from 'react';
import styled from 'styled-components';
import lodashGet from 'lodash.get';

const dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non quam rutrum, congue orci quis, pretium dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras porta dolor vel turpis venenatis, ut porttitor tortor egestas. Sed interdum orci dignissim posuere cursus. Quisque fringilla sed velit vitae egestas. Maecenas at sagittis enim, vel lacinia tortor. Sed pharetra erat vel dui tincidunt gravida. Duis imperdiet eleifend orci sed tempus.'

const features = [{
  title: 'Feature 1',
  desciption: dummyText
}, {
  title: 'Feature 2',
  desciption: dummyText
}, {
  title: 'Feature 3',
  desciption: dummyText
}, {
  title: 'Feature 4',
  desciption: dummyText
}, {
  title: 'Feature 5',
  desciption: dummyText
}]

const H1 = styled.h1`
  font-size: 2em;
  margin-bottom: 0.25em;
`;

const ListItemTitle = styled.p`
  font-weight: bold;
`;

const ListItem = styled.li`
  margin: 1em 0;
`;

const List = styled.ul`
  font-family: Georgia, Times, 'Times New Roman', serif;
  padding-left: 1.75em;
`;

export default function Features() {
  return (
    <div>
      <h1>
        {'Features'}
      </h1>
      <List>
        {features.map((feature, index) => (
          <ListItem key={index}>
            <ListItemTitle>
              {lodashGet(feature, 'title')}
            </ListItemTitle>
            <p>
              {lodashGet(feature, 'desciption')}
            </p>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
