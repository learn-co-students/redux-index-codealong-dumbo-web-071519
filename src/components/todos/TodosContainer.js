import React, {Component} from 'react';
import { connect } from 'react-redux';
import Todos from './Todo';


class TodosContainer extends Component{
    
    displayTodos =()=>{
    return this.props.todos.map((todo,id) => <Todos item={todo} key={id}/>)
    }

    render(){
        console.log("Todos Container",this.props)
        return(
            <div>
                <ul>
                    {this.displayTodos()}
                </ul>
            </div>
        );
    }



}
const mapStateToProps=(state)=>{
    return {
        todos: state.todos}
}

export default connect(mapStateToProps)(TodosContainer)