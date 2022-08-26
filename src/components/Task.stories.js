import React from 'react';

import Task from './Task';

export default {
  component: Task, // 해당 컴포넌트
  title: 'Task', // 컴포넌트를 참조하는 방법
};

// 1. component
const Template = (args) => <Task {...args} />;

// 2. 하위 stories
// 해당하는 스토리를 생성하는 함수를 각각 export
// Task보다는 Template에서 변수를 할당하는 것이 편하다. 

export const Default = Template.bind({}); // Template 함수 복사 
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};