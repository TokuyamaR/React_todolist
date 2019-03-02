import React from 'react';
import Task from './Task';
import _ from 'lodash';

export class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 0,
                    text: 'sample tddo1'
                },
                {
                    id: 1,
                    text: 'sample tddo2'
                }
            ]
        };
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(id) {
        //　方法①：for文で引数のid以外のデータを全部出力
        // let data = [];
        // for(let i in this.state.data){
        //     if(this.state.data[i].id !== id){
        //         data.push(this.state.data{i});
        //     }
        // }
        //　方法②：lodash使い引数のidのデータを除外する
        let data = _.reject(this.state.data[i].data, {'id': id});
        this.setState({
            data: data
        });
    }

    render() {
        let tasks = [];
        for (let i in this.state.data) {
            // componentを複数生成する場合はkeyの指定が必要
            // key はReactがコンポーネントを一意に識別するためのもの
            // keyはiかidを指定することが一般的
            tasks.push(<Task key={this.state.data[i].id}
                             id={this.state.data[i].id}
                             text={this.state.data[i].text} onRemove={this.handleRemove}
            />);
        }

        return (
            <ul className="list js-todo_list">
                {tasks}
            </ul>
        );
    }
}