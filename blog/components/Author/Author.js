/**
 * @description 首页右侧作者信息组件
 */

import React from 'react';
import { Avatar, Divider} from 'antd'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';
import './author.module.css'

const Author = () => {
    return (
        <div className="author-div comm-box">
            <div><Avatar size={100} src="https://s2.loli.net/2022/03/07/67anFj32TstCidU.jpg" /></div>
            <div className='author-introduction'>
                大三在校生，喜欢周杰伦，喜欢健身增肌，专注前端编程开发
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<GithubOutlined />} className="account"  />
                <Avatar size={28} icon={<QqOutlined />}  className="account" />
                <Avatar size={28} icon={<WechatOutlined />}  className="account"  />
            </div>
        </div>
    )
}

export default Author