import React from 'react';

import PageHeader from './PageHeader';
import MainContent from './base/MainContent';

function PageLayout({ children }) {
  return (
    <div>
      <PageHeader />
      <MainContent>{children}</MainContent>;
    </div>
  );
}

export default PageLayout;
