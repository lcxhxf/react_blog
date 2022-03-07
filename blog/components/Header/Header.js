import React from 'react';
import { Row, Col, Menu, Icon } from 'antd'
import { HomeOutlined, BookOutlined, SmileOutlined } from '@ant-design/icons';
import './header.module.css'

const Header = () => (
    <div className="header">
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                <span className="header-logo">增肌超人</span>
                <span className="header-txt">疯狂增肌，学习前端编程，喜欢周杰伦。</span>
            </Col>

            <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu mode="horizontal">
                    <Menu.Item key='home' icon={<HomeOutlined />}>
                        {/* <Icon type="home" /> */}
                        首页
                    </Menu.Item>

                    <Menu.Item key='video' icon={<BookOutlined />}>
                        {/* <Icon type="youtobe" /> */}
                        文章
                    </Menu.Item>

                    <Menu.Item key='life' icon={<SmileOutlined />}>
                        {/* <Icon type="smile" /> */}
                        生活
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)


export default Header