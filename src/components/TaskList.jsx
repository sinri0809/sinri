import React from "react";

import PropTypes from 'prop-types';

import Task from "./Task";

export default function TaksList({ loading, tasks, onArchiveTask, onPinTask }) {
  const events = {
    onPinTask,
    onArchiveTask
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox"></span>
      <span className="glow-text">
        <span>Loading</span>
        <span>cool</span>
        <span>state</span>
      </span>

    </div>
  );

  if(loading){
    return (
      <div className="list-items" data-testid="loading" key={"loading"}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    )
  }

  if(tasks.length === 0){
    return (
      <div className="list-items" key={"empty"} data-testid="empty">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    )
  }

  const tasksInOrder = [
    ...tasks.filter((t) => t.state === "TASK_PINNED"),
    ...tasks.filter((t) => t.state !== "TASK_PINNED")
  ];

  
  return <div className="list-items">
    {tasksInOrder.map((task) => (
      <Task key={task.id} task={task} {...events} />
    ))}
  </div>
};


// prop-types 또는 typescript 로 컴포넌트에 필요한 데이터 형태를 명시한다. -> 양질의 ui 를 제작할 수 있다.
TaksList.protoTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired, // 다른 컴포넌트에서 불러오는게 위험하다는 warnning
  onPinTask: PropTypes.func,
  onArchiveTask: PropTypes.func
};
TaksList.defaultProps = {
  loading: false,
}