import React from "react";

import TaksList from "./TaskList";
import * as TaskStories from './Task.stories';

export default {
  component: TaksList,
  title: 'components/TaskList',
  // decorator : 스토리에 임의의 래퍼(wrapper)를 제공하는 한 방법
  decorators: [story => <div style={{padding: "3rem"}}>{story()}</div>],
}

const Template = (args) => <TaksList {...args} />;

export const Default = Template.bind({});
Default.args = {
  // tasks: [
  //   { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
  //   { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
  //   { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
  //   { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
  //   { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
  //   { ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
  // ]
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};