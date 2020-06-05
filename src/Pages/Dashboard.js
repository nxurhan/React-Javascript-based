import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import jsonData from '../data/chartsData.json'
import TopBar from '../components/TopBar';
import { MDBCard, MDBCardBody, MDBCol, MDBRow } from 'mdbreact';

/* Bar Chart Data*/
const dataBar = {
    labels: jsonData.dataCharts[0].labels,
    datasets: jsonData.dataCharts[1].dataBar,
};
/* Line Chart Data */
const dataLine = {
    labels: jsonData.dataCharts[0].labels,
    datasets: jsonData.dataCharts[2].dataLine,
};
class Dashboard extends Component {
    render() {
        return (
            <div>
                <TopBar title="Dashboard" />
                <div className="container">
                    <MDBRow>
                        <MDBCol md="6" size="12">
                            <MDBCard className="CardHover">
                                <MDBCardBody>
                                    <Bar
                                        data={dataBar}
                                        options={{
                                            maintainAspectRatio: false,
                                            title: {
                                                display: true,
                                                text: 'Messages'
                                            },
                                        }}
                                    />
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="6" size="12">
                            <MDBCard className="CardHover">
                                <MDBCardBody>
                                    <Line data={dataLine}
                                        options={{
                                            title: {
                                                display: true,
                                                text: 'Calls'
                                            },
                                        }}
                                    />
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </div>

            </div>
        );
    }
}

export default Dashboard;
