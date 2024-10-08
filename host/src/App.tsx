import { Layout, Menu, theme } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

import TaskList from "tasklistApp/Tasklist";

const HostApp = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuItems = [
    {
      key: "tasklist",
      label: "Task List",
    },
    {
      key: "feature-management",
      label: "Feature Management",
    },
  ];

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["tasklist"]}
          items={menuItems}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <TaskList/>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
         ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default HostApp;
