import React from 'react';
import ReactDOM from 'react-dom';
import {TodoList} from './components/TodoList'

class TodoApp extends React.Component {
    render() {
        return (
            // JSXの書き方でJS内のHTMLは必ず一つのタグで括る
            <div>
                <form action="" className="form">
                    <div className="inputArea">
                        <input type="text" className="inputText js-get-val" value="" placeholder="Input your task"/>
                        <span className="error js-toggle-error">未入力です</span>
                    </div>
                </form>

                {/*仮の検索Box(後々componentを挿入)*/}
                <div className="searchBox">
                    <i className="fa fa-search searchBox__icon" aria-hidden="true"/>
                    <input type="text" className="searchBox__input js-search"
                           value="" placeholder="somothing keyword"/>
                </div>

                <TodoList/>
            </div>
        );
    }
}

ReactDOM.render(
    <TodoApp/>,
    document.getElementById('app')
);