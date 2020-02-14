import React from 'react'
//导入侧边栏
import { Layout, Menu } from 'antd'
const { Content, Sider } = Layout;

//导入路由
import { Route, Link ,Switch} from 'react-router-dom'

//导入电影组件
import MovieList from './MovieList'
import MovieDetail from './MovieDetail';


export default class MovieContainer extends React.Component {
    constructor(propos) {
        super(propos)
        this.state = {}
    }
    
    render() {
        return <Layout style={{ height: '100%' }}>
            <Sider width={200} style={{ background: '#fff', border: '1px solid #eee' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[window.location.hash.split('/')[2]]}
                    style={{ height: '100%', borderRight: 0 }}
                >

                    <Menu.Item key="in_theaters">
                        <Link to="/movie/in_theaters/1">正在热映</Link>
                    </Menu.Item>
                    <Menu.Item key="coming_soon">
                        <Link to="/movie/coming_soon/1">即将上映</Link>

                    </Menu.Item>
                    <Menu.Item key="top250">
                        <Link to="/movie/top250/1">Top250</Link>
                    </Menu.Item>

                </Menu>
            </Sider>
            <Layout >

                <Content
                    style={{
                        background: '#fff',
                        padding: 10,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    <Switch>
                        <Route path="/movie/detail/:id" component={MovieDetail}></Route>

                        <Route path="/movie/:type/:page" component={MovieList}></Route>
                    </Switch>
                    
        </Content>
            </Layout>
        </Layout>
        



    }
}