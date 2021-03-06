import React, { Component } from 'react';
import Presenter from './presenter';

class Screen extends Component {

    constructor(props) {
        super(props);
        this.chartLineRef = React.createRef();
    }

    state = {
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        },

        dataPie: {
            datasets: [{
                data: [10, 20, 30],
                backgroundColor: [
                    "#FF6384",
                    "#63FF84",
                    "#84FF63"
                ]
            }],
            labels: [
                'Red',
                'Yellow',
                'Blue'
            ]
        }
    }


    componentDidMount() {
        //const { datasets } = this.chartLineRef.chartInstance.data
        //console.log(datasets[0].data);
    }

    render() {
        return (
            <Presenter
                props={this.props}
                data={this.state.data}
                dataPie={this.state.dataPie}
                chartLineRef={this.chartLineRef}
            />
        );
    }
}
export default Screen;