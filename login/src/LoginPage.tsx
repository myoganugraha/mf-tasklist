import { Button, Form, notification, Input } from "antd";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./Login.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { loginAction, userDetailsAction } from "./redux/actions/auth.action";

type NotificationType = "success" | "info" | "warning" | "error";

const LoginPage = () => {
  const [api, contextHolder] = notification.useNotification();

  const { loading, error, success, token, userDetails } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();

  const onFinish = async (values: any) => {
    dispatch(loginAction(values));
  };

  useEffect(() => {
    if (success) {
      console.log({ token });
      openNotification("success", "Login Success", "");
      dispatch(userDetailsAction(token!));
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      openNotification("error", "Login Failed", "");
    }
  }, [error]);

  useEffect(() => {
    if (userDetails) {
      console.log(userDetails );
    }
  }, [userDetails]);

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
          <Button block htmlType="submit" loading={loading}>
            Log In
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginPage;
