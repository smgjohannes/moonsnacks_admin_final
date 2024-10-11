import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faArchive,
  faCalendarAlt,
  faCommentDots,
} from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #2c3e50;
  height: 100vh;
  padding: 20px 0;
`;

const SidebarHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const Logo = styled.img`
  height: 60px;
  margin-right: 10px;
`;

const SidebarLinks = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SidebarLinkItem = styled.li`
  margin: 15px 0;
`;

const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  color: #ecf0f1;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 20px;
  transition: background 0.3s ease;

  &:hover {
    background-color: #34495e;
    border-radius: 4px;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  font-size: 20px;
`;

function Sidebar() {
  return (
    <SidebarContainer>
      {/* Sidebar Header with Logo and Title */}
      <SidebarHeader>
        <Logo src='/Imgs/logo.png' alt='Moonsnacks Logo' />{' '}
      </SidebarHeader>

      {/* Sidebar Links */}
      <SidebarLinks>
        <SidebarLinkItem>
          <SidebarLink href='/admin/blogs'>
            <Icon icon={faBook} />
            Blogs
          </SidebarLink>
        </SidebarLinkItem>
        <SidebarLinkItem>
          <SidebarLink href='/admin/archives'>
            <Icon icon={faArchive} />
            Archives
          </SidebarLink>
        </SidebarLinkItem>
        <SidebarLinkItem>
          <SidebarLink href='/admin/testimonials'>
            <Icon icon={faCommentDots} />
            Testimonials
          </SidebarLink>
        </SidebarLinkItem>
        <SidebarLinkItem>
          <SidebarLink href='/admin/events'>
            <Icon icon={faCalendarAlt} />
            Events
          </SidebarLink>
        </SidebarLinkItem>
        {/* Add other links here */}
      </SidebarLinks>
    </SidebarContainer>
  );
}

export default Sidebar;
