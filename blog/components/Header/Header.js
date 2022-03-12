/**
 * @description 首页头部组件
 */

import React, { useEffect, useState } from 'react';
import { Row, Col, Menu, Icon } from 'antd'
import { HomeOutlined, BookOutlined, SmileOutlined } from '@ant-design/icons';
import './header.module.css'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../../config/apiUrl'

const Header = () => {

    const [navArray, setNavArray] = useState([])
    console.log(navArray);

    useEffect(() => {       //第二个参数设置为[],只有第一次进入该组件才会执行
        const fetchData = async () => {
            const result = await axios(servicePath.getTypeInfo).then(
                (res) => {
                    setNavArray(res.data.data)
                    return res.data.data
                }
            )
            setNavArray(result)
        }
        fetchData()
    }, [])

    //跳转到列表页
    const handleClick = (e) => {
        if (e.key == 0) {
            Router.push('/')
        } else {
            Router.push('/list?id=' + e.key)
        }


    }

    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                    <span className="header-logo">增肌超人</span>
                    <span className="header-txt">疯狂增肌，学习前端编程，喜欢周杰伦。</span>
                </Col>

                <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={8}>
                    <Menu mode="horizontal" onClick={handleClick}>
                        <Menu.Item key="0" icon={<HomeOutlined />}>
                            博客首页
                        </Menu.Item>
                        <Menu.Item key={navArray[0]?.id} icon={<HomeOutlined />}>
                            {/* <Icon type="home" /> */}
                            {navArray[0]?.typeName}
                        </Menu.Item>

                        <Menu.Item key={navArray[1]?.id} icon={<BookOutlined />}>
                            {/* <Icon type="youtobe" /> */}
                            {navArray[1]?.typeName}
                        </Menu.Item>

                        <Menu.Item key={navArray[2]?.id} icon={<SmileOutlined />}>
                            {/* <Icon type="smile" /> */}
                            {navArray[2]?.typeName}
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}


export default Header