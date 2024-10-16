import { Button, Form, notification, Input } from "antd";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./Login.css";
import { loginApi } from "./service/login.service";
import { useState } from "react";

type NotificationType = "success" | "info" | "warning" | "error";

const LoginPage = () => {
  const { postLogin } = loginApi();
  const [api, contextHolder] = notification.useNotification();
  const [isLoading, setLoading] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      await postLogin(values.username, values.password);
    } catch (e: any) {
      openNotification("error", "Login Failed", e.message);
    } finally {
      setLoading(false);
    }
  };

  const openNotification = (
    type: NotificationType,
    title: string,
    description: string
  ) => {
    api[type]({
      message: title,
      description: description,
    });
  };

  return (
    <>
      {contextHolder}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Form
        autoComplete="off"
        onFinish={onFinish}
        style={{
          minWidth: 360,
        }}
      >
        <Form.Item name="username" rules={[{ required: true }]}>
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true }]}>
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button block htmlType="submit" loading={isLoading}>
            Log In
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginPage;
