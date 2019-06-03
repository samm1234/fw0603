import React, { Fragement } from 'react';
import styled from 'styled-components';
import { Upload, Icon, message } from 'antd';
import axios from 'axios';
import {Table} from 'antd';
import {tableData} from './data.json';
import firebase from 'firebase'

export default class DashboardPage extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {data:[]}
  }

  componentDidMount() {
    var firebaseConfig = ({ //나중에 우리 firebase로 바꿀 것.
      apiKey: "AIzaSyCCU2VeOmng3BbpGcDzX79D9lTMmsRs9Gw",
      authDomain: "lucky-aed54.firebaseapp.com",
      databaseURL: "https://lucky-aed54.firebaseio.com",
      projectId: "lucky-aed54",
      storageBucket: "lucky-aed54.appspot.com",
      messagingSenderId: "836535631836"
    });

    var otherApp = firebase.initializeApp(firebaseConfig, 'other');

      const ref = otherApp.database().ref();
      ref.on("value", snapshot => {
        this.setState({data:snapshot.val()});
      });
  }

  render() {
    var tableColumns = [
      {
        title: '순위',
        dataIndex: '순위',
        key: '순위',
      },
      {
        title: 'UserID',
        dataIndex: 'UserID',
        key: 'UserID',
      },
      {
        title: '평균',
        dataIndex: '평균',
        key: '평균',
      },
    ]
    
    return (
      <div className="card-body">
        {console.log(tableData)}
        {console.log(this.state.data)}
        <Table
          className="utils__scrollTable"
          scroll={{ x: '100%' }}
          columns={tableColumns}
          dataSource={this.state.data}
          pagination={false}
        />
      </div>      
    );
}
}

