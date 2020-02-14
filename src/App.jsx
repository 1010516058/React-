import React from 'react'
//导入路由组件
import { HashRouter, Route, Link } from 'react-router-dom'

//导入需要的Ant Design 组件
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

//导入模块化样式
import styles from './css/app.scss'

//导入路由相关的组件页面
import HomeContainer from './components/home/HomeContainer'
import MovieContainer from './components/movie/MovieContainer'
import AboutContainer from './components/about/AboutContainer'


export default class App extends React.Component {
    constructor(propos) {
        super(propos)
        this.state = {}
    }
    componentWillMount(){
        console.log(window.location.hash.split('/')[1]);
    }
    render() {
        return <HashRouter>
            <Layout className="layout" style={{ height: '100%' }}>
                <Header>
                    <div className={styles.logo} />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={[window.location.hash.split('/')[1]]}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="home">

                            <Link to="/home">首页</Link>
                        </Menu.Item>
                        <Menu.Item key="movie">
                            <Link to="/movie/in_theaters/1">电影</Link>
                        </Menu.Item>
                        <Menu.Item key="about">
                            <Link to="/about">关于</Link>
                        </Menu.Item>
                    </Menu>
                </Header>

                <Content style={{ background: '#fff' ,flex:'1'}}>
                    <Route path="/home" component={HomeContainer}></Route>
                    <Route path="/movie" component={MovieContainer}></Route>
                    <Route path="/about" component={AboutContainer}></Route>
                </Content>

                <Footer style={{ textAlign: 'center' }}>Cj ©2018 Created by Cj</Footer>
            </Layout>

        </HashRouter>
    }
}