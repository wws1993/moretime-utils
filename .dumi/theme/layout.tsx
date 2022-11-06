import React from 'react';
import Layout from 'dumi-theme-default/es/layout';

export default ({ children, ...props }) => (
  <Layout {...props}>
    <>
      {/* <button>反馈</button> */}
      {children}
    </>
  </Layout>
);
