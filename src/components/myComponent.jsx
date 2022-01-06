import React from "react";
import '../styles/myComponent.scss';
import ChildComponent from './childComponent';
import AddComponent from './addComponent'

class Mycomponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developer', salary: '100' },
            { id: 'abcJob2', title: 'Testers', salary: '200' },
            { id: 'abcJob3', title: 'Project Manager', salary: '300' }
        ],
        arrEditJob: {}
    }

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (job) => {
        console.log('delete job', job)
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }

    editAjob = (job) => {
        console.log('>>> edit job', job)
        this.setState({ arrEditJob: job })
    }

    render() {

        return (
            <>

                <div>
                    <AddComponent
                        addNewJob={this.addNewJob}
                    />
                </div>


                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                    editAjob={this.editAjob}
                />
            </>

        );
    }
}

export default Mycomponent;