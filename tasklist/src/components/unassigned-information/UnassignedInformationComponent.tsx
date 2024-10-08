import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";

const { Text } = Typography;

const UnassignedInformationComponent: React.FC<{ withButton: boolean }> = ({
  withButton = false,
}) => {
  return (
    <div>
      <ExclamationCircleOutlined /> <Text type="secondary">Unassigned</Text>
      {withButton && (
        <Button
          type="primary"
          style={{
            marginLeft: 8,
          }}
        >
          Assign to Me
        </Button>
      )}
    </div>
  );
};

export default UnassignedInformationComponent;
