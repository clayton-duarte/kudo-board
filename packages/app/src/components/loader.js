
import styled from 'styled-components';
import React from 'react';

import Icons from './icons';

const LoadIcon = styled(Icons.load)`
animation: spin 1s ease infinite;
height: 10rem;
width: 10rem;
`;

const Loader = ({ children, ...rest }) => (
  <LoadIcon />
)

export default Loader;
