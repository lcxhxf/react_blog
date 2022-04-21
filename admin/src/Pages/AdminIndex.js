import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import '../static/css/AdminIndex.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddArticle from './AddArticle'
import ArticleList from './ArticleList';
import { useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



function AdminIndex(props) {
    const [collapsed, setCollapsed] = useState(false)
    let navigate = useNavigate();

    const onCollapse = collapsed => {
        setCollapsed(collapsed)
    };

    const handleClickArticle = e=>{     //添加文章和文章列表跳转
        
        // console.log(e.item.props)
        if(e.key=='addArticle'){
            navigate('/index/add')
        }else{
            navigate('/index/list')
        }
    
      }


    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <PieChartOutlined />
                        <span>工作台</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <DesktopOutlined />
                        <span>添加文章</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        onClick={handleClickArticle}
                        title={
                            <span>
                                <UserOutlined />
                                <span>文章管理</span>
                            </span>
                        }
                    >
                        <Menu.Item key="addArticle">添加文章</Menu.Item>
    <Menu.Item key="articleList">文章列表</Menu.Item>

                    </SubMenu>

                    <Menu.Item key="9">
                        <FileOutlined />
                        <span>留言管理</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>后台管理</Breadcrumb.Item>
                        <Breadcrumb.Item>工作台</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <Routes>
                            <Route path="/"  element={<AddArticle />} ></Route>
                            <Route path="/add"  element={<AddArticle />} ></Route>
                            <Route path="/add/:id"  element={<AddArticle />} ></Route>
                            <Route path="/list" element={<ArticleList />} ></Route>
                        </Routes>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>zengjichaoren.xyz</Footer>
            </Layout>
        </Layout>
    )

}

export default AdminIndex