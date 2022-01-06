import React from "react";
import '../styles/myComponent.scss';

class AddComponent extends React.Component {

    state = {
        title: "",
        salary: "",
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleClickButtonAdd = () => {
        if (!this.state.title || !this.state.salary) {
            alert('Missing some information')
            return
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: '',
        })
    }


    render() {

        return (
            <div>
                <div>
                    New job is {this.state.title} - {this.state.salary}
                </div>

                <div>Title</div>
                <input value={this.state.title} type="text"
                    onChange={(event) => this.handleChangeTitle(event)}
                />

                <div>Salary</div>
                <input value={this.state.salary} type="text"
                    onChange={(event) => this.handleChangeSalary(event)}
                />

                <div>
                    <button onClick={this.handleClickButtonAdd} className="btn">
                        Add
                    </button>
                </div>

            </div>
        );
    }
}

export default AddComponent;