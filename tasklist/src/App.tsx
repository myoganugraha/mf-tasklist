import { Col, Layout, Row } from "antd";
import TaskQueueComponent from "./components/task-queue/TaskQueue";
import { ITaskItem } from "./types/ITaskItem";
import { Content } from "antd/es/layout/layout";
import TaskDetails from "./components/task-details/TaskDetails";
import { useEffect, useState } from "react";
import TaskContext from "./components/task-context/TaskContext";
import { tasklistApi } from "./hooks/tasklistApi";

const TaskList = () => {
  const [tasklist, setTasklist] = useState<ITaskItem[]>([]);
  const [selectedTaskList, setSelectedTaskList] = useState<ITaskItem | null>(
    null
  );

  const { getAllTaskList } = tasklistApi();

  useEffect(() => {
    fetchAllTaskList();
  }, []);

  const fetchAllTaskList = async () => {
    try {
      const tasklistData = await getAllTaskList();
      setTasklist(tasklistData);
    } catch (error) {
      console.log(error);
    }
  };

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
              taskList={tasklist}
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
                  minWidth: 200,
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
