import React, { Component } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class TasksManage extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            title: '',
            description: '',
            dueDate: new Date(),
            priority: 'none',
            createdAt: '',
            id: '',
            currentState: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        let dueDate = new Date()

        if (nextProps.dueDate) {
            dueDate = new Date(nextProps.dueDate)
        }

        this.setState({
            title: nextProps.title,
            description: nextProps.description,
            dueDate: dueDate,
            priority: nextProps.priority,
            createdAt: nextProps.createdAt,
            id: nextProps.id,
            currentState: nextProps.currentState
        });
    }

    titleHandler(e) {
        this.setState({ title: e.target.value });
    }

    descriptionHandler(e) {
        this.setState({ description: e.target.value });
    }

    dueDateHandler = (date) => {
        this.setState({ dueDate: date });
    }

    priorityHandler = (e) => {
        this.setState({ priority: e.target.value });
    }

    handleSave() {
        const item = this.state;
        if (this.state.id) {
            this.props.saveModalDetails(item)
        } else {
            this.props.addTaskDetails(item)
        }
    }

    render() {
        const modalTitle = this.state.id ? 'Edit Task' : 'Add Task'
        const { modalId } = this.props
        return (
            <div className="modal fade" id={modalId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{modalTitle}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="title">Summary</label>
                                    <input type="text" value={this.state.title} className="form-control" autoFocus placeholder="Summary" onChange={(e) => this.titleHandler(e)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="title">Description</label>
                                    <textarea value={this.state.description} className="form-control" placeholder="Description" onChange={(e) => this.descriptionHandler(e)} />
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="title">Date</label>
                                            <DatePicker className="form-control" id="example-datepicker" selected={this.state.dueDate} onChange={this.dueDateHandler} />
                                            {/* <input type="text" value={this.state.dueDate} className="form-control" placeholder="Date" onChange={(date) => this.dueDateHandler(date)} /> */}
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="title">Priority</label>
                                        <select value={this.state.priority} className="form-control" onChange={this.priorityHandler}>
                                            <option >none</option>
                                            <option>low</option>
                                            <option>medium</option>
                                            <option>high</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn btn-success" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default TasksManage;