import React from 'react'
import { Menu, Icon, Button } from 'antd'
import './slider.scss'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

class Sider extends React.Component {
  state = {
    collapsed: true
  }
  handleClick = (e) => {
    // e.preventDefault()
    console.log(e, 111)
    if (e.key !== null) {
      this.setState({
        collapsed: false
      })
    }
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <div className="slider" style={{width: this.state.collapsed ? 260 : 80}}>
        <div className="topper-button" style={{width: this.state.collapsed ? 260 : 80}}>
          <Button type="primary" onClick={this.toggleCollapsed} style={{marginBottom: 20, marginLeft: 20}}>
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}></Icon>
          </Button>
        </div>
        <Menu
          className="menu-ul"
          theme={this.state.collapsed ? 'dark' : 'dark'}
          mode="inline"
          onClick={this.handleClick}
          inlineCollapsed={!this.state.collapsed}
        >
          <Menu.Item key="home" title="index">
            <Icon type="pie-chart" spin="true"/>
            <span>首页</span>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="user" /><span>账号中心</span></span>}>
            <Menu.Item key="item1">公司账号</Menu.Item>
            <Menu.Item key="item2">个人账号</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>商务案例</span></span>}>
            <Menu.Item key="sub2-item1" title="二--子菜单1">初创公司</Menu.Item>
            <Menu.Item key="sub2-item2" title="二--子菜单2">精品小店</Menu.Item>
            <Menu.Item key="sub2-item3" title="二--子菜单3">个人博客</Menu.Item>
            <Menu.Item key="sub2-item4" title="二--子菜单4">毕业设计</Menu.Item>
          </SubMenu>
            {/* <MenuItemGroup key="sub1-group1">
              <Menu.Item key="group-item1">公司账号</Menu.Item>
              <Menu.Item key="group-item2">个人账号</Menu.Item>
            </MenuItemGroup> */}
            {/* <MenuItemGroup key="sub2-group2" title="第一组子菜单2">
              <Menu.Item key="group-item3">子菜单 3</Menu.Item>
              <Menu.Item key="group-item4">子菜单 4</Menu.Item>
            </MenuItemGroup> */}
        </Menu>
      </div>
    )
  }
}

export default Sider