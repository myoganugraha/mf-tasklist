import { Col, Layout, Row } from "antd";
import "./App.css";
import TaskQueueComponent from "./components/task-queue/TaskQueue";
import { TaskItem } from "./types/TaskItem";
import { Content } from "antd/es/layout/layout";
import TaskDetails from "./components/task-details/TaskDetails";
import { useState } from "react";
import TaskContext from "./components/task-context/TaskContext";

const TaskList: React.FC<{ taskList: TaskItem[] }> = ({ taskList }) => {
  const [selectedTaskList, setSelectedTaskList] = useState<
    TaskItem | undefined
  >(undefined);
  return (
    <Layout
      style={{
        width: "100%",
      }}
    >
      <Content>
        <Row>
          <Col>
            <TaskQueueComponent
              taskList={taskList}
              onClick={(item) => {
                console.log(item);
                setSelectedTaskList(item);
              }}
            />
          </Col>
          <Col>
            {selectedTaskList ? (
              <TaskDetails item={selectedTaskList} />
            ) : (
              <div
                style={{
                  minWidth: 500,
                  minHeight: "95vh",
                }}
              ></div>
            )}
          </Col>
          <Col>
            {selectedTaskList ? (
              <TaskContext item={selectedTaskList} />
            ) : (
              <div
                style={{
                  minWidth: 250,
                  minHeight: "95vh",
                }}
              ></div>
            )}
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default TaskList;
