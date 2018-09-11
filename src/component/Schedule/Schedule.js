import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import { Link } from "react-router-dom";
import Admin from "../../Admin/Admin"

export default class Schedule extends Component {
    constructor() {
        super();
        this.state = {
            schedule: []
        };
    }
    componentDidMount() {
        this.getSchedule()
    }

    getSchedule() {
        axios.get("/api/schedule").then(response => {
            console.log(response);
            this.setState({
                schedule: response.data
            });
        });
    }
    
    deleteSchedule(id) {
        axios.delete(`/api/schedule/${id}`)
            .then ( () => {this.getSchedule()})
    }

//update time in schedule
    // updateSchedule(id) {
    //     axios.put(`/api/schedule/${id}`)
    //         .then ( () => {this.getSchedule()} )
    // }

    render() {
        const mappedSchedule = this.state.schedule.map((scheduled, i) => {
            // console.log(mappedSchedule)
            return (
                <div key={i} className="whitefont">
                    <div>
                        <h4>{scheduled.time}: { scheduled.day}</h4>
                        <h4>{scheduled.class_name} </h4>
                        <h4> Description: </h4>
                        <h4>{scheduled.description}</h4>
                        <h1>

                        <button id="btn" onClick={() => this.deleteSchedule(scheduled.schedule_id)}> DELETE SCHEDULE
                        </button>
                        
                        </h1>
                        
                    </div>
                </div>
            );
    });

    return (
    <div>
        <Navbar />
        {mappedSchedule}
        <Link to='/Login'><button>Back to Classes</button></Link>
        <br/>
        <Link to='/Admin'><button>Administrator's Page</button></Link>
        
    </div>
    );
    }
}


