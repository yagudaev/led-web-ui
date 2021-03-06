import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Typography, Alert } from 'antd';
// import styles from './Welcome.less';
import DemoSelectorForm from './DemoSelectorForm';

// const CodePreview: React.FC<{}> = ({ children }) => (
//   <pre className={styles.pre}>
//     <code>
//       <Typography.Text copyable>{children}</Typography.Text>
//     </code>
//   </pre>
// );

export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <Card>
      <DemoSelectorForm />
    </Card>
  </PageHeaderWrapper>
);
