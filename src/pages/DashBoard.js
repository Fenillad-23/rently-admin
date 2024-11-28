import React, { useState, useMemo } from "react";
// import React, { useMemo } from 'react';
import { Table, Pagination, Container, Row, Col, Form } from "react-bootstrap";
import { useTable, usePagination } from "react-table";

function Dashboard() {
  return (
    <div class="dashboard">
      <div class="card">
        <div class="card-wrapper">
          <div class="card-title">App Users</div>
          <div class="card-value">24</div>
        </div>
        <div class="icon-wrapper">
          <mwc-icon class="card-icon">people</mwc-icon>
        </div>
      </div>
      <div class="card">
        <div>
          <div class="card-title">Tenants</div>
          <div class="card-value">24 / 32</div>
        </div>
        <div class="icon-wrapper">
          <mwc-icon class="card-icon">people</mwc-icon>
        </div>
      </div>
      <div class="card">
        <div>
          <div class="card-title">Parking</div>
          <div class="card-value">16 / 40</div>
        </div>
        <div class="icon-wrapper">
          <mwc-icon class="card-icon">local_parking</mwc-icon>
        </div>
      </div>
      <div class="card">
        <div>
          <div class="card-title">Rent Due</div>
          <div class="card-value">$6,450</div>
        </div>
        <div class="icon-wrapper">
          <mwc-icon class="card-icon">receipt</mwc-icon>
        </div>
      </div>
      <div class="card">
        <div>
          <div class="card-title">Rent Received</div>
          <div class="card-value">$11,250</div>
        </div>
        <div class="icon-wrapper">
          <mwc-icon class="card-icon">receipt</mwc-icon>
        </div>
      </div>
      <div class="card">
        <div>
          <div class="card-title">Parking Pass Due</div>
          <div class="card-value">$500</div>
        </div>
        <div class="icon-wrapper">
          <mwc-icon class="card-icon">local_parking</mwc-icon>
        </div>
      </div>
      <div class="card">
        <div>
          <div class="card-title">Hall Requests</div>
          <div class="card-value">3</div>
        </div>
        <div class="icon-wrapper">
          <mwc-icon class="card-icon">chat</mwc-icon>
        </div>
      </div>
      <div class="card">
        <div>
          <div class="card-title">Pending Complaints</div>
          <div class="card-value">2</div>
        </div>
        <div class="icon-wrapper">
          <mwc-icon class="card-icon">chat</mwc-icon>
        </div>
      </div>
      <div class="card">
        <div>
          <div class="card-title">Pending Services</div>
          <div class="card-value">2</div>
        </div>
        <div class="icon-wrapper">
          <mwc-icon class="card-icon">manage_accounts</mwc-icon>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
