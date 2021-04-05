import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Breadcrumb, Button, Input, Select } from 'antd';
import { connect } from 'react-redux';
import { Option } from 'antd/lib/mentions';
import { bindActionCreators } from 'redux';
import * as tableAction from './../../../actions/tableAction';
import './style.css';

const dataEmpty = {
  data: [],
};
class AdminTable extends Component {
  state = {
    dataTable: ['i++'],
    dataType: [],
    name: '',
  };

  componentDidMount() {
    const { tables } = this.props;
    if (tables.length === undefined) {
      console.log('đúng');
      const { onTable } = this.props;
      const { fetchTable } = onTable;
      fetchTable();
    }
  }

  onPostTable = () => {
    const { dataTable, dataType, name } = this.state;
    const data = {
      name,
      data: dataTable.slice(1, dataTable.length),
      datatype: dataType,
    };
    const { onCreateTable } = this.props;
    const { fetchCreateTable } = onCreateTable;
    console.log(data);
    fetchCreateTable(data);
  };

  onChange = e => {
    const { name, value } = e.target;
    const { dataTable, dataType } = this.state;
    console.log(name, value, dataTable.length);
    if (Number(name) === dataTable.length) {
      dataTable.push(value);
      dataType.push('VARCHAR(255)');
    } else if (value === '') {
      dataTable.splice(Number(name), 1);
      dataType.splice(Number(name) - 1, 1);
    } else {
      dataTable.splice(Number(name), 1, value);
    }
    this.setState({
      dataTable,
    });
  };

  onSelect = (e, index) => {
    const { dataType, dataTable } = this.state;
    if (index === dataType.length) {
      if (dataTable[index + 1]) {
        dataType.push(e);
      }
    } else {
      dataType.splice(index, 1, e);
    }
    this.setState({
      dataType,
    });
  };

  render() {
    const { tables } = this.props;
    const { dataTable } = this.state;
    console.log('tables', tables);
    const { data } = tables.data ? tables : dataEmpty;
    return (
      <div className="wide" style={{ marginTop: '15px' }}>
        <Breadcrumb>
          <Breadcrumb.Item>Admin</Breadcrumb.Item>
          <Breadcrumb.Item>Table</Breadcrumb.Item>
        </Breadcrumb>
        <Row gutter={[5, 5]}>
          <Col xs={24} md={8} lg={3}>
            <Button
              type="primary"
              block
              onClick={() => {
                this.onClick();
              }}
            >
              <span className="fa fa-plus mgr_base"></span>
              <span className="txt_strong"> Table</span>
            </Button>
          </Col>
          <Col xs={24} md={8} lg={3}>
            <Button type="primary" block>
              <span className="fa fa-sign-in mgr_base"></span>
              <span className="txt_strong"> Import</span>
            </Button>
          </Col>
          <Col xs={24} md={8} lg={3}>
            <Button type="primary" block>
              <span className="fa fa-sign-out mgr_base"></span>
              <span className="txt_strong"> export</span>
            </Button>
          </Col>
        </Row>
        <Row gutter={[5, 5]} className="mgt_base">
          <Col xs={24} md={18} lg={12}>
            <table>
              <tbody>
                <tr className="header_table">
                  <th>Stt</th>
                  <th>Name Table</th>
                  <th>Created Time</th>
                </tr>
                {data.map((item, index) => (
                  <tr className="row_table" key={item.id}>
                    <th>{index + 1}</th>
                    <th>{item.name}</th>
                    <th>{item.created_at}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
          <Col xs={24} md={18} lg={12}>
            <Row>
              <Col xs={24} md={18} lg={12}>
                <Input
                  placeholder="Table Name"
                  onChange={e => this.setState({ name: e.target.value })}
                />
              </Col>
            </Row>
            <Row className="mgt_base">
              {dataTable.map((item, index) => (
                <Col xs={24} md={18} lg={24}>
                  <Input.Group compact>
                    <Input
                      style={{ width: '65%', textAlign: 'left' }}
                      placeholder="Column"
                      onChange={this.onChange}
                      name={index + 1}
                    />
                    <Select
                      style={{ width: '35%' }}
                      defaultValue="VARCHAR(255)"
                      name="txtTypes"
                      onSelect={e => this.onSelect(e, index)}
                    >
                      <Option value="VARCHAR(255)">String</Option>
                      <Option value="INT">Int</Option>
                      <Option value="IMAGE">Image</Option>
                      <Option value="BIT">Bit</Option>
                      <Option value="FLOAT(24)">Real</Option>
                      <Option value="FLOAT(53)">Float</Option>
                      <Option value="DATE">Date</Option>
                      <Option value="DATETIME">DateTime</Option>
                      <Option value="TIME">Time</Option>
                    </Select>
                  </Input.Group>
                </Col>
              ))}
              <Col xs={24} md={8} lg={6} className="mgt_base">
                <Button type="primary" onClick={() => this.onPostTable()} block>
                  <span className="fa fa-plus mgr_base"></span>
                  <span className="txt_strong"> Create </span>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { table } = state;
  return {
    tables: table,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTable: bindActionCreators(tableAction, dispatch),
    onCreateTable: bindActionCreators(tableAction, dispatch),
  };
};
AdminTable.propTypes = {
  tables: PropTypes.object,
  onTable: PropTypes.shape({
    fetchTable: PropTypes.func,
  }),
  onCreateTable: PropTypes.shape({
    fetchCreateTable: PropTypes.func,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminTable);
