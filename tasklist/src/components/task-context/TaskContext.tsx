import { Col, Divider, Typography } from "antd";
import { TaskItem } from "../../types/TaskItem";
import { dateFormatter } from "../../utils/DateFormatter";

const { Text } = Typography;

const TaskContext: React.FC<{ item: TaskItem | undefined }> = ({ item }) => {
  return (
    <div
      style={{
        minWidth: 250,
        padding: 16,
        minHeight: "95vh",
        textAlign: "start",
      }}
    >
      <Col>
        <Text type="secondary">Details</Text>
      </Col>
      <Col
        style={{
          marginTop: 16,
        }}
      >
        <Text type="secondary">Creation date</Text>
      </Col>
      <Col>
        <Text strong>{dateFormatter(item?.creationDate)}</Text>
      </Col>
      <Divider
        style={{
          borderColor: "gray",
          borderWidth: 1,
        }}
      />
      <Col>
        <Text type="secondary">Candidates</Text>
      </Col>
      <Col>
        {item?.candidateGroups.map((candidateGroup, index) => (
          <div
            style={{
              backgroundColor: "#E1C16E",
              display: "inline-block",
              borderRadius: 10,
              padding: 4,
              marginLeft: index != 0 ? 8 : 0,
              marginTop: 4,
            }}
          >
            <Text key={index} strong style={{ color: "white" }}>
              {candidateGroup}
            </Text>
          </div>
        ))}
      </Col>
      <Divider
        style={{
          borderColor: "gray",
          borderWidth: 1,
        }}
      />
      <Col
        style={{
          marginTop: 16,
        }}
      >
        <Text type="secondary">Due date</Text>
      </Col>
      <Col>
        <Text strong>{item?.dueDate ? dateFormatter(item.dueDate) : 'No Due Date'}</Text>
      </Col>
    </div>
  );
};

export default TaskContext;
