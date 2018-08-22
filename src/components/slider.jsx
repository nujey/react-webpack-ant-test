import React from 'react'
import { Menu, Icon, Button } from 'antd'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

class Sider extends React.Component {
  state = {
    collapsed: false
  }
  handleClick = (e) => {
    // e.preventDefault()
    console.log(e, 111)
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <div style={{width: 200}}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{marginBottom: 20}}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}></Icon>
        </Button>
        <Menu
          theme={this.state.collapsed ? 'dark' : 'light'}
          mode="inline"
          onClick={this.handleClick}
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="home" title="index">
            <Icon type="pie-chart" />
            <span>首页</span>
          </Menu.Item>
          <SubMenu key="sub1" title="第一组">
            <MenuItemGroup key="sub1-group1" title="第一组子菜单1">
              <Menu.Item key="group-item1">子菜单 1</Menu.Item>
              <Menu.Item key="group-item2">子菜单 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup key="sub2-group2" title="第一组子菜单2">
              <Menu.Item key="group-item3">子菜单 3</Menu.Item>
              <Menu.Item key="group-item4">子菜单 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <SubMenu key="sub2" title="第二组">
            <Menu.Item key="sub2-item1" title="二--子菜单1">二-1</Menu.Item>
            <Menu.Item key="sub2-item2" title="二--子菜单2">二-2</Menu.Item>
            <Menu.Item key="sub2-item3" title="二--子菜单3">二-3</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}

export default Sider