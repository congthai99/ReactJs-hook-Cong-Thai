import React from "react";

class ChildComponent extends React.Component {

    state = {
        showJob: false,

    }

    handleClickButtonShow = () => {
        this.setState({
            showJob: true
        })
    }

    handleClickButtonHide = () => {
        this.setState({
            showJob: false
        })
    }

    handleClickDelete = (job) => {
        console.log('handlejob', job)
        this.props.deleteAJob(job)
    }

    handleClickButtonEdit = (job) => {
        this.props.editAjob(job)
    }

    render() {
        console.log(this.props)
        let { arrJobs } = this.props
        let { showJob } = this.state
        return (
            <>
                <>

                    {showJob === false ?
                        <div><button onClick={this.handleClickButtonShow}>show</button>
                        </div>
                        :
                        <>
                            <div className='list-job'>
                                {arrJobs.map((item, index) => {
                                    if (item.salary >= 50) {
                                        return (
                                            <div key={item.id}>

                                                {item.title} - {item.salary}

                                                <span><button onClick={() => this.handleClickButtonEdit(item)} className='btn'>Edit</button></span> <></>
                                                <span onClick={() => this.handleClickDelete(item)}>x</span>
                                            </div>
                                        )
                                    } else {
                                        return null
                                    }

                                })}
                            </div>
                            <div>
                                <button onClick={this.handleClickButtonHide}>Hide</button>
                            </div>
                        </>

                    }


                </>

            </>




        );
    }
}

export default ChildComponent;