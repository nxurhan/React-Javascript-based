import React, { Component } from 'react';
import MaterialTable from 'material-table';
import { MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import TopBar from '../components/TopBar';
import { MDBCard, MDBCardBody } from 'mdbreact';

class TablePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { title: 'First Name', field: 'firstName' },
                { title: 'Last Name', field: 'lastName' },
                { title: 'Nationality', field: 'nationality', lookup: { 1: 'lebanese', 2: 'not lebanese' } },
                { title: 'Phone Number', field: 'phoneNumber', type: 'numeric' },
                {
                    title: 'Last Month Bill', field: 'lastMonthBill',
                    lookup: {
                        1: 'January',
                        2: 'February',
                        3: 'March',
                        4: 'April',
                        5: 'May',
                        6: 'June',
                        7: 'July',
                        8: 'August',
                        9: 'September',
                        10: 'October',
                        11: 'November',
                        12: 'December',
                    }
                },
            ],
            data: [
                { firstName: 'Nour', lastName: 'Kh', nationality: 1, phoneNumber: 123, lastMonthBill: 2 },
            ],
            columnsExtra: [
                { title: 'Address', field: 'Address' },
                { title: '# of Services Subscribed', field: 'Services', type: 'numeric' },
                { title: 'Age', field: 'Age', type: 'numeric' },
            ],
            dataExtra: [
                { Address: 'Beirut', Services: 2, Age: 23 },
            ],
            openModal: false

        }
    }
    openModal = () => {
        this.setState({ openModal: !this.state.openModal })
    }

    render() {
        var ref = this;
        return (
            <div>
                <TopBar title="Table Info" />
                <div className="container">
                    <MDBCard className="CardHover">
                        <MDBCardBody>
                            <MaterialTable
                                title=""
                                columns={this.state.columns}
                                data={this.state.data}
                                editable={{
                                    onRowAdd: (newData) =>
                                        new Promise((resolve) => {
                                            setTimeout(() => {
                                                resolve();
                                                ref.setState((prevState) => {
                                                    const data = [...prevState.data];
                                                    data.push(newData);
                                                    return { ...prevState, data };
                                                });
                                            }, 600);
                                        }),
                                    onRowUpdate: (newData, oldData) =>
                                        new Promise((resolve) => {
                                            setTimeout(() => {
                                                resolve();
                                                if (oldData) {
                                                    ref.setState((prevState) => {
                                                        const data = [...prevState.data];
                                                        data[data.indexOf(oldData)] = newData;
                                                        return { ...prevState, data };
                                                    });
                                                }
                                            }, 600);
                                        }),
                                    onRowDelete: (oldData) =>
                                        new Promise((resolve) => {
                                            setTimeout(() => {
                                                resolve();
                                                ref.setState((prevState) => {
                                                    const data = [...prevState.data];
                                                    data.splice(data.indexOf(oldData), 1);
                                                    return { ...prevState, data };
                                                });
                                            }, 600);
                                        }),
                                }}
                                actions={[
                                    {
                                        icon: 'info',
                                        tooltip: 'More Info',
                                        onClick: () => ref.openModal()
                                    }
                                ]}
                                options={{
                                    actionsColumnIndex: -1,

                                }}
                            />
                            <MDBModal isOpen={this.state.openModal} toggle={this.openModal} size="lg">
                                <MDBModalHeader toggle={this.openModal}>Extra Info</MDBModalHeader>
                                <MDBModalBody>
                                    <MaterialTable
                                        title=""
                                        columns={this.state.columnsExtra}
                                        data={this.state.dataExtra}
                                    />
                                </MDBModalBody>
                            </MDBModal>
                        </MDBCardBody>
                    </MDBCard>
                </div>

            </div >
        );
    }
}
export default TablePage;
