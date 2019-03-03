import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import TodoCreator from './components/TodoCreater';
import Search from "./components/Search";
import _ from 'lodash';


class TodoApp extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [
                {
                    id: this.createHashId(),
                    text: 'sample todo1'
                },
                {
                    id: this.createHashId(),
                    text: 'sample todo2'
                }
            ],
            searchText: ''
        };
        this.callBackRemoveTask = this.callBackRemoveTask.bind(this);
        this.callBackAddTask = this.callBackAddTask.bind(this);
        this.callBackSearch = this.callBackSearch.bind(this);
        this.filterCollection = this.filterCollection.bind(this);
    }

    createHashId() {
        return Math.random().toString(36).slice(-16);
    }

    callBackSearch(val) {
        this.setState({
            searchText: val
        });
    }

    callBackRemoveTask(id) {
        // 方法①：for文で引数のid以外のデータを全部出力
        // let data = [];
        // for(let i in this.state.data){
        //     if(this.state.data[i].id !== id){
        //         data.push(this.state.data{i});
        //     }
        // }
        // 方法②：lodash使い引数のidのデータを除外する
        let data = _.reject(this.state.data, {'id': id});
        this.setState({
            data: data
        });
    }

    callBackAddTask(val) {
        let nextData = this.state.data;
        nextData.push({id: this.createHashId(), text: val});
        this.setState({
            data: nextData
        });
    }

    filterCollection(elm) {
        const regexp = new RegExp('^' + this.state.searchText, 'i');
        return (elm.text.match(regexp));
    }


    render() {

        // Todo: 検索後に戻すとDoneが外れる状態をリファクト
        const data = (this.state.searchText) ? this.state.data.filter(this.filterCollection) : this.state.data;
        return (
            // JSXの書き方でJS内のHTMLは必ず一つのタグで括る
            <div>
                <TodoCreator callBackAddTask={this.callBackAddTask}/>

                <Search callBackSearch={this.callBackSearch}/>

                <TodoList data={data} callBackRemoveTask={this.callBackRemoveTask}/>
            </div>
        );
    }
}

ReactDOM.render(
    <TodoApp/>,
    document.getElementById('app')
);