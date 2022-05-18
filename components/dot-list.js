import { ListItem, UnorderedList } from '@chakra-ui/react';

export const DotList = ({ entries }) => {
  const listItems = entries.map((entries) => (
    <ListItem key={entries.toString()} value={entries}>
      {entries}
    </ListItem>
  ));
  return <UnorderedList>{listItems}</UnorderedList>;
};
