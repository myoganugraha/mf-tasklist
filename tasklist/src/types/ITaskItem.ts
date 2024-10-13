export interface ITaskItem {
    id: string
    name: string
    taskDefinitionId: string
    processName: string
    creationDate: string
    completionDate: any
    assignee: any
    taskState: string
    sortValues?: string[]
    isFirst?: boolean
    formKey: string
    formId: string
    formVersion: number
    isFormEmbedded: boolean
    processDefinitionKey: string
    processInstanceKey: string
    tenantId: string
    dueDate: any
    followUpDate: any
    candidateGroups: string[]
    candidateUsers: any
    variables?: any[]
    context?: any
    implementation: string
  }