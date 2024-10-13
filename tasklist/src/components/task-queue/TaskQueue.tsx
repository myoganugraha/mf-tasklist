import { Typography, List, Space } from "antd";
import { ITaskItem } from "../../types/ITaskItem";
import { CalendarOutlined } from "@ant-design/icons";
import UnassignedInformationComponent from "../unassigned-information/UnassignedInformationComponent";
import AssignedInformationComponent from "../assigned-information/AssignedInformationComponent";
import { dateFormatter } from "../../utils/DateFormatter";

const { Text } = Typography;

const TaskQueueComponent: React.FC<{
  taskList: ITaskItem[];
  onClick: (taskItem: ITaskItem) => void;
}> = ({ taskList, onClick }) => {
  return (
    <List
      itemLayout="vertical"
      size="small"
      dataSource={taskList}
      style={{ backgroundColor: "white", minWidth: 200, minHeight: "95vh" }}
      renderItem={(item) => (
        <List.Item key={item.id} onClick={() => onClick(item)}>
          <Space
            direction="vertical"
            size={5}
            style={{ textAlign: "start", display: "flex" }}
          >
            <Text strong>{item.name}</Text>
            <Text type="secondary">{item.processName}</Text>
            {item.assignee ? (
              <AssignedInformationComponent
                assignedTo={item.assignee}
                withButton={false}
              />
            ) : (
              <UnassignedInformationComponent withButton={false} />
            )}
            <Text type="secondary">Created</Text>
            <div>
              <CalendarOutlined />{" "}
              <Text>{dateFormatter(item?.creationDate)} </Text>
            </div>
          </Space>
        </List.Item>
      )}
    />
  );
};

export default TaskQueueComponent;
