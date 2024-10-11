import React from 'react';
import styled from 'styled-components';

// Styled component for the card container
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  flex: 1;
  min-width: 150px;
`;

// Card title styles
const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: #2c3e50;
`;

// Card value (number) styles
const CardValue = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: #27ae60;
`;

const Dashboard = () => {
  return (
    <CardContainer>
      <Card>
        <CardTitle>Archives</CardTitle>
        <CardValue>32</CardValue>
      </Card>
      <Card>
        <CardTitle>Blogs</CardTitle>
        <CardValue>157</CardValue>
      </Card>
      <Card>
        <CardTitle>Testimonials</CardTitle>
        <CardValue>315</CardValue>
      </Card>
      <Card>
        <CardTitle>Events</CardTitle>
        <CardValue>0</CardValue>
      </Card>
    </CardContainer>
  );
};

export default Dashboard;
