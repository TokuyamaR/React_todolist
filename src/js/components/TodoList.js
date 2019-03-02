import React from 'react';
import Task from './Task';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(id) {
        this.props.callBackRemoveTask(id);
    }

    render() {
        let tasks = [];
        for (let i in this.props.data) {
            // componentを複数生成する場合はkeyの指定が必要
            // key はReactがコンポーネントを一意に識別するためのもの
            // keyはiかidを指定することが一般的
            tasks.push(<Task key={this.props.data[i].id}
                             id={this.props.data[i].id}
                             text={this.props.data[i].text} onRemove={this.handleRemove}/>);
        }

        return (
            <ul className="list js-todo_list">
                {tasks}
            </ul>
        );
    }
}