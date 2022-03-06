import React from 'react';
import { Row, Col, Menu, Icon } from 'antd'
import styles from './header.module.css'
import { HomeOutlined, BookOutlined, SmileOutlined } from '@ant-design/icons';
const Header = () => (
    <div className={styles.header}>
        <Row type='flex' justify='center'>
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                <span className={styles.headerLogo}>增肌超人</span>
                <span className={styles.headerTxt}>疯狂增肌，学习前端编程，喜欢周杰伦。</span>
            </Col>
            <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu mode='horizontal' className={styles.antMenu}>
                    <Menu.Item key='home' className={styles.antMenuItem} icon={<HomeOutlined />}>
                        {/* <Icon type="home" /> */}
                        首页
                    </Menu.Item>

                    <Menu.Item key='video' className={styles.antMenuItem} icon={<BookOutlined />}>
                        {/* <Icon type="youtobe" /> */}
                        文章
                    </Menu.Item>

                    <Menu.Item key='life' className={styles.antMenuItem} icon={<SmileOutlined />}>
                        {/* <Icon type="smile" /> */}
                        生活
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)

export default Header