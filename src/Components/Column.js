import React, { Component } from "react";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;
  display: flex;
  flex-direction: column;  
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver? 'skyblue' : 'white')};
  flex-grow:1;
  min-height: 100px;
`;
class Column extends Component {
  render() {
    return (
      <div>
        <Container>
          <Title>{this.props.column.title}</Title>
          <Droppable droppableId={this.props.column.id}>
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {this.props.tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index}></Task>
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      </div>
    );
  }
}

export default Column;
