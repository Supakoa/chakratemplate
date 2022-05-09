import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function CardPost({ title, text, ...cardPost }) {
  return (
    <Box shadow="md" borderRadius="lg" borderWidth="1px" >
      <Heading>{title}</Heading>
      <Text>{text}</Text>
    </Box>
  );
}

export default CardPost;
