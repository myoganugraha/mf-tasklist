import { Button, Col, Divider, Row, Typography } from "antd";
import { ITaskItem } from "../../types/ITaskItem";
import UnassignedInformationComponent from "../unassigned-information/UnassignedInformationComponent";
import AssignedInformationComponent from "../assigned-information/AssignedInformationComponent";

const { Text, Title } = Typography;

const TaskDetails: React.FC<{ item: ITaskItem | undefined }> = ({ item }) => {
  return (
    <div
      style={{
        minHeight: "95vh",
        textAlign: "start",
        padding: 16,
        minWidth: 500,
        borderColor: '#d3d3d3',
        borderWidth: 1,
        borderStyle: 'solid'
      }}
    >
      <div>
        <Row align="middle" justify="space-between">
          <Col>
            <div>
              <Text strong>{item?.name}</Text>
            </div>
            <div>
              <Text type="secondary">{item?.processName}</Text>
            </div>
          </Col>
          <Col>
            <div>
              {item?.assignee ? (
                <AssignedInformationComponent
                  assignedTo={item.assignee}
                  withButton={true}
                />
              ) : (
                <UnassignedInformationComponent withButton={true} />
              )}
            </div>
          </Col>
        </Row>
        <Divider
          style={{
            borderColor: "gray",
            borderWidth: 1,
          }}
        />
        <Title level={2}>{item?.name}</Title>
        <div style={{
          position: 'absolute',
          bottom: 40,
          right: 16,
        }}>
          <Button type="primary" disabled={item?.assignee == null || undefined}>
            Complete Task
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
