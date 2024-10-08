import { Button, Form, Input } from "antd";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./Login.css";

const LoginPage = () => {
  return (
    <>
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
        style={{
          minWidth: 360,
        }}
      >
        <Form.Item name="email">
          <Input placeholder="E-mail" />
        </Form.Item>
        <Form.Item name="password">
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button block>Log In</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginPage;

