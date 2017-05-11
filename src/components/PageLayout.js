import React from 'react';

import PageHeader from './PageHeader';
import { MainContent, MainTitle } from './base/MainContent';

function PageLayout({ title, children }) {
  return (
    <div>
      <PageHeader />
      <MainContent>
        <MainTitle>{title}</MainTitle>
        {children}
      </MainContent>
    </div>
  );
}

export default PageLayout;
