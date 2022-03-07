/* eslint-disable verdaccio/jsx-spread */
import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import React from 'react';

type SearchItemProps = {
  name: string;
  version?: string;
  description?: string;
};

const Wrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

export const Description = styled('div')<{ theme?: Theme }>(({ theme }) => ({
  display: 'none',
  color: theme?.palette?.greyLight2,
  lineHeight: '1.5rem',
  [`@media (min-width: ${theme?.breakPoints.large}px)`]: {
    display: 'block',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    width: '25%',
    maxWidth: '600px',
    alignItems: 'center',
    overflow: 'hidden',
    paddingLeft: theme.spacing(),
    fontSize: theme?.fontSize.ssm,
  },
}));

const NameGroup = styled.span({
  display: 'flex',
  flexGrow: '6',
  order: 1,
});

const Name = styled('span')<{ theme?: Theme }>(({ theme }) => ({
  fontWeight: '700',
  fontSize: theme?.fontSize.sm,
}));

const Version = styled('span')<{ theme?: Theme }>(({ theme }) => ({
  fontSize: theme?.fontSize.ssm,
  order: 2,
}));

const SearchItem: React.FC<SearchItemProps> = ({ name, description, version, ...props }) => {
  return (
    <li {...props}>
      <Wrapper>
        <NameGroup>
          <Name>{name}</Name>
          {description && <Description>{description}</Description>}
        </NameGroup>
        {version && <Version>{version}</Version>}
      </Wrapper>
    </li>
  );
};

export default SearchItem;
