import React, { Component } from 'react';
import './index.css';

class ReactToDoList extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            items: []
        };
    }

    onChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }

    AjoutTache(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        });
    }

    SupprimeTache(item) {
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    Tache() {
        return this.state.items.map((item) => {
            return (

                <div className="taches_ajoute" onClick={this.SupprimeTache.bind(this, item)}>
                    <span class="separe" >{item}</span></div>
            );
        });
    }

    render() {
        return (
            <div>
                <h1> ReactToDoList React </h1>
                <form className="separe" >
                    <input value={this.state.userInput}
                        type="text"
                        placeholder="Entrez une tâche !"
                        onChange={this.onChange.bind(this)}
                        className="ajout_tache" />
                    <button onClick={this.AjoutTache.bind(this)}>Ajouter</button>
                </form>
                <h2> Les tâches </h2>

                <div className="scroller" > {this.Tache()}</div>
            </div>
        );
    }
}

export default ReactToDoList;