import React from 'react';

export default class TodoBox extends React.Component {
  // Omitted
  render() {
    return (
        <div className="todoBox">
                <h1>Homework</h1>
                <InputText />
                <TodoForm />
        </div>
    )
  }
}

    class InputText extends React.Component {
        render() {
            return (
                <div className="inputText">
                    <input />
                </div>
            );
        }
    }

    class Todo extends React.Component {
        // Write code here
        render() {
            return (
                <tr>
                    <td style={{border: "1px solid black"}}>{this.props.title}</td>
                    <td style={{border: "1px solid black"}}>{this.props.children}</td>
                </tr>
            )
        }
    }
var QueryString = {1: banana, 2: apple}

    class TodoForm extends React.Component {
        render() {
            return (
                <div className= "queryString">
                    <ul>
                        <li>{QueryString.1}</li>
                        <li>{QueryString.2}</li>
                    </ul>
                </div>
            )
        }
    }