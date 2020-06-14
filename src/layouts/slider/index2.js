import React, { Component } from 'react';
import { Menu } from 'antd';
import { history } from 'umi';
import { connect } from 'dva';

class LeftMenu extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            menuList: [],
        }
    }
    handleClick = (item) => {
        this.props.dispatch({
            type: 'account/saveMenuTag',
            payload: item
        })
        history.push(item.path);
    };
    componentDidMount() {
        fetch('/api/userInfo').then(response => response.json()).then(res => {
            if(res && res.status == 200) {
                this.setState({
                    menuList: res.data.sysMenu
                })
            }
        })
    }

    renderMenu = (item) => {
        if (item.children && item.children.length > 0) {
            return (
                <div key={item.id} className='subMenu'>
                    <p>{item.title}</p>
                    <ul>
                    {
                        item.children.map(item1 => {
                            return this.renderMenu(item1)
                        })
                    }
                    </ul>
                </div>
            )

        } else {
            return (
                <li key={item.id} onClick={() => { this.handleClick(item) }}>
                    <i className={`icon iconfont ${item.icon}`}></i>&#12288;{item.title}
                </li>
            )
        }
    }

    render() {
        const { menuList } = this.state;
        return (
            <div
                className='layout_subMenu'
            >
                {
                    menuList.map(item => {
                        return this.renderMenu(item)
                    })
                    
                }
            </div>
        );
    }
}

export default connect()(LeftMenu);