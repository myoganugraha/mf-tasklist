import { ITaskItem } from "../ITaskItem";

const mockTaskItem1: ITaskItem = {
  id: "2251799813724745",
  name: "Payment Creation",
  taskDefinitionId: "Activity_0i5lo66",
  processName: "Bank Process",
  creationDate: "2024-10-08T09:50:20.571+0000",
  completionDate: null,
  assignee: null,
  taskState: "CREATED",
  sortValues: ["1728381020571", "2251799813724745"],
  isFirst: true,
  formKey: "2251799813686015",
  formId: "Form_0tgacw2",
  formVersion: 1,
  isFormEmbedded: false,
  processDefinitionKey: "2251799813686017",
  processInstanceKey: "2251799813724740",
  tenantId: "<default>",
  dueDate: null,
  followUpDate: null,
  candidateGroups: ["assignee"],
  candidateUsers: null,
  variables: [],
  context: null,
  implementation: "JOB_WORKER",
};

const mockTaskItem2: ITaskItem = {
  id: "2251799813687904",
  name: "Payment Creation",
  taskDefinitionId: "Activity_0i5lo66",
  processName: "Bank Process",
  creationDate: "2024-09-24T06:22:39.484+0000",
  completionDate: null,
  assignee: "abcdef",
  taskState: "CREATED",
  sortValues: ["1727158959484", "2251799813687904"],
  isFirst: false,
  formKey: "2251799813686015",
  formId: "Form_0tgacw2",
  formVersion: 1,
  isFormEmbedded: false,
  processDefinitionKey: "2251799813686017",
  processInstanceKey: "2251799813687899",
  tenantId: "<default>",
  dueDate: null,
  followUpDate: null,
  candidateGroups: ["assignee", "1234"],
  candidateUsers: null,
  variables: [],
  context: null,
  implementation: "JOB_WORKER",
};

const mockTaskItemList: ITaskItem[] = [mockTaskItem1, mockTaskItem2];

export { mockTaskItem1, mockTaskItem2, mockTaskItemList };
