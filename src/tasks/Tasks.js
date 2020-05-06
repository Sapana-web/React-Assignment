import React, { Component } from 'react';
import TasksList from './TasksList';
import { TASK_STATUS, TASK_PRIORITY } from '../config/constants'
import './TaskStyles.css'
import TasksManage from './TasksManage';

class Tasks extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasksList: [{
                id: 3434343,
                currentState: TASK_STATUS.pending,
                title: 'Purchase Notebook',
                description: 'description',
                createdAt: 'Sat May 01 2020 15:17:36 GMT+0530 (India Standard Time)',
                dueDate: 'Mon May 04 2020 15:17:36 GMT+0530 (India Standard Time)',
                priority: TASK_PRIORITY.low
            },
            {
                id: 4343434,
                currentState: TASK_STATUS.completed,
                title: 'Buy Groceries',
                description: 'description of buy groceries',
                createdAt: 'Sat May 02 2020 15:17:36 GMT+0530 (India Standard Time)',
                dueDate: 'Mon May 05 2020 15:17:36 GMT+0530 (India Standard Time)',
                priority: TASK_PRIORITY.medium
            },
            {
                id: 3232332,
                currentState: TASK_STATUS.pending,
                title: 'Purchase Notebook',
                description: 'description',
                createdAt: 'Sat May 02 2020 15:17:36 GMT+0530 (India Standard Time)',
                dueDate: 'Mon May 03 2020 15:17:36 GMT+0530 (India Standard Time)',
                priority: TASK_PRIORITY.low
            }
            ],
            taskDetails: {
                title: '',
                description: '',
                dueDate: new Date(),
                priority: '',
                createdAt: '',
                id: '',
                currentState: 'pending'
            }
        }
    }

    replaceModalItem() {
        this.setState({
            taskDetails: {
                title: '',
                description: '',
                dueDate: new Date(),
                priority: 'none',
                createdAt: '',
                id: '',
                currentState: 'pending'
            }
        })
    }

    addTaskDetails = (item) => {
        let tasksList = this.state.tasksList;
        let currentDate = new Date()
        item.id = currentDate.getTime() + Math.random();
        item.createdAt = currentDate
        tasksList.unshift(item)
        this.setState({ tasksList: tasksList })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-9">
                        <h1>ToDo App</h1>
                    </div>
                    <div className="col-3 mt-3">
                        <button className="pull-right btn btn-primary" onClick={() => this.replaceModalItem()} title="Create Task" data-toggle="modal" data-target="#addTaskModal"
                        >+</button>
                    </div>
                </div>

                <TasksList list={this.state.tasksList} />

                <TasksManage {...this.state.taskDetails} modalId="addTaskModal" addTaskDetails={this.addTaskDetails} />
            </div>
        );
    }
}

export default Tasks;