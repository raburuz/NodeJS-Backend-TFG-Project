import React, { FC } from 'react';
import { MetaTags } from '../../interfaces';

interface Props {
  metaTags: MetaTags;
}

export const Metas: FC<Props> = ({ metaTags }) => {
  const { title, description } = metaTags;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </>
  );
};
