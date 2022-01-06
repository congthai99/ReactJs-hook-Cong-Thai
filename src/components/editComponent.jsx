import React from "react";
import '../styles/myComponent.scss';

class Editcomponent extends React.Component {


    state = {

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

    handleClickButtonEdit = () => {

    }


    render() {
        console.log(this.props.arrEditJob.title)


        return (
            <div>
                <div>Title</div>
                <input value={this.state.title} type="text"
                    onChange={(event) => this.handleChangeTitle(event)}
                />

                <div>Salary</div>
                <input value={this.state.salary} type="text"
                    onChange={(event) => this.handleChangeSalary(event)}
                />

                <div>
                    <button onClick={this.handleClickButtonEdit} className="btn">
                        Edit
                    </button>
                </div>

            </div>
        );

    }
}

export default Editcomponent;