import styled from "styled-components";

const Sidebar = () => {
  return <SidebarWrapper>Sidebar</SidebarWrapper>;
};

const SidebarWrapper = styled.aside`
  position: absolute;
  top-0;
  left:0;
  background-color:#F2F2F2;
  width:30%;
  z-index:999;
  height:100%;
  padding: 2em;
  font-weight:bold;
  @media screen and (max-width:570px){
    width:60%;
    padding:1em;
  }
`;

export default Sidebar;
