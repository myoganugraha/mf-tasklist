import { UserOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";

const { Text } = Typography;

const AssignedInformationComponent: React.FC<{
  assignedTo: String;
  withButton: boolean;
}> = ({ assignedTo, withButton }) => {
  return (
    <div>
      <UserOutlined /> <Text>{assignedTo}</Text>
      {withButton && (
        <Button
          variant="solid"
          color="danger"
          style={{
            marginLeft: 8,
          }}
        >
          Unassign
        </Button>
      )}
    </div>
  );
};

export default AssignedInformationComponent;
