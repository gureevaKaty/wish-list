import { Component } from "react";

export class Wishes extends Component {
    state = {
        userInput: '',
        wishList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e});
    }

    addWish(input) {
        if (input === "") {
            alert('Please enter a wish')
        } else {
        let wishArray = this.state.wishList;
        wishArray.push(input);
        this.setState({wishList: wishArray, userInput:''})
    }}

    deleteWishes() {
        let wishArray = this.state.wishList;
        wishArray = [];
        this.setState({wishList: wishArray})
    }

    crossedWish(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="container">
                        <input 
                        type="text"
                        placeholder="Write your wish..."
                        onChange={(e) => {this.onChangeEvent(e.target.value)}}
                        value = {this.state.userInput}/>
                    </div>

                    <div className="container">
                        <button className="btn-add btn" onClick={() => this.addWish(this.state.userInput)}>Add wish</button>
                    </div>

                    <div className="container">
                    <ul>
                        {this.state.wishList.map((item, index)=>(
                            <li onClick={this.crossedWish} key={index}>{item}</li>
                        )
                        )}
                    </ul>
                    </div>

                    <div className="container">
                        <button className="btn-delete btn" onClick={() => this.deleteWishes()}>Delete all</button>
                    </div>
                </form>
            </div>
        )
    }
}