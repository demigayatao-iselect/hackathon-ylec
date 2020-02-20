import * as React from 'react';
import { Breadcrumb, Icon } from 'antd';
import './navigation.css';

export const Navigation = ({ currentPage }) => (
  <div className="nav-container">
    <Breadcrumb>
      <Breadcrumb.Item href="">
        <Icon type="home" />
      </Breadcrumb.Item>
      <Breadcrumb.Item href="">
        <Icon type="user" />
        <span>Yoga Legends Electricity Comparison</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>{currentPage}</Breadcrumb.Item>
    </Breadcrumb>
  </div>
);
