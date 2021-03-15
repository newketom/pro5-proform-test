import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProForm, {  ProFormList, ProFormText } from '@ant-design/pro-form';

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <ProForm>
        <ProFormList initialValue={[{}]} name="users" label="用户信息">
          <ProFormText name="labels" label="姓名" />
        </ProFormList>
      </ProForm>
    </PageContainer>
  );
};
