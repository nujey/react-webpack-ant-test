import React from 'react'
import { Menu, Icon, Button } from 'antd'
import { Link } from "react-router-dom"
import './slider.scss'
import { menus } from './menu.js'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

class Sider extends React.Component {
  state = {
    collapsed: true
  }
  handleClick = (e) => {
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
  /**
   * 当组件挂载的时候
   */
  componentDidMount() {
    console.log(menus)
  }
  componentWillUnmount() {
    console.log(222)
  }
  childrenItem(children = []) {
    return children.map((x, index) => {
      return  <Menu.Item key={x.code} title={x.label}>
                <Link to={x.path.startsWith('/user') ? `/user/${index}` : x.path}><span>{x.label}</span></Link>
              </Menu.Item>
    })
  }
  sliderList(list = []) {
    return list.map((x) => {
      const { path: route, code: key, icon, children, label } = x
      const hasChild = <SubMenu key={x.code} title={<span><Icon type={icon}/><span>{label}</span></span>}>
                        {this.childrenItem(children)}
                      </SubMenu>
      const hasNoChild =  <Menu.Item key={key} title="index">
                            <Link to={route} ><Icon type={icon}/><span>{label}</span></Link>
                          </Menu.Item>
      return  children.length === 0  ?  hasNoChild  :  hasChild       
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
          inlineCollapsed={!this.state.collapsed}>
          {this.sliderList(menus)}
        </Menu>
      </div>
    )
  }
}

export default Sider