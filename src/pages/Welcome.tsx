import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProForm, { ProFormGroup, ProFormList, ProFormText } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { Card, Space } from 'antd';

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <Space direction="vertical">
        <Card title="简单示例">
          <ProForm>
            <ProFormList initialValue={[{}]} name="users" label="用户信息">
              <ProFormText name="labels" label="姓名" />
            </ProFormList>
          </ProForm>
        </Card>
        <Card title="复杂嵌套示例">
          <ProForm>
            <ProFormList
              name="users"
              label="用户信息"
              itemRender={({ listDom, action }, { record }) => {
                return (
                  <ProCard
                    bordered
                    extra={action}
                    title={record?.name}
                    style={{
                      marginBottom: 8,
                    }}
                  >
                    {listDom}
                  </ProCard>
                );
              }}
            >
              <ProFormGroup>
                <ProFormText name="name" label="姓名" />
                <ProFormText name="nickName" label="昵称" />
              </ProFormGroup>
              <ProFormList name="labels" label="用户信息">
                <ProFormGroup>
                  <ProFormText name="value" label="值" />
                  <ProFormText name="label" label="显示名称" />
                </ProFormGroup>
              </ProFormList>
            </ProFormList>
          </ProForm>
        </Card>
      </Space>
    </PageContainer>
  );
};
