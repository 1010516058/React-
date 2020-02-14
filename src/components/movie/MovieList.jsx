import React from 'react'
import { Spin, Alert } from 'antd'

import fetchJSONP from 'fetch-jsonp'

//导入电影item/分页
import MovieItem from './MovieItem'
import { Pagination } from 'antd';

export default class MovieList extends React.Component{
    constructor(propos){
        super(propos)
        this.state={
            movies:[],//列表
            nowPage:parseInt(propos.match.params.page) || 1,//页数
            pageSize:12, //每页条数
            total:0,    //总共多少条
            isLoading:true ,//是否请求完成
            movieType:propos.match.params.type //类型

        }
    }
    componentWillMount(){
       
        this.getMoviesByTypeAndPage()
    }
    //组件接受新属性
    componentWillReceiveProps(nextProps){
        this.setState({
            isLoading:true,
            nowPage:parseInt(nextProps.match.params.page) || 1,
            movieType:nextProps.match.params.type //类型

        },function(){
            this.getMoviesByTypeAndPage()
        })
    }
    render(){
        return <div>{this.renderList()}</div>
            
       
    }
    //获取电影数据
    getMoviesByTypeAndPage=()=>{
        const start=this.state.pageSize*(this.state.nowPage-1)
        const url='https://douban.uieee.com/v2/movie/'+this.state.movieType+'?start='+start+'&count='+this.state.pageSize
        fetchJSONP(url)
            .then(response=>{
                return response.json()                
            })
            .then(data=>{
                this.setState({
                    isLoading:false,
                    movies:data.subjects,
                    total:data.total
                })
            })
        
        // const data=require('../testData/hoting.json')
        // console.log(data)
        //防止请求次数超过限制
        // setTimeout(()=>{
        //     this.setState({
        //         isLoading=false,
        //         movies:data.subjects,
        //         total:data.total
        //     })
        // },1000 )
    }
    
    //渲染电影组件的方法
    renderList=()=>{
        if(this.state.isLoading){
            return <Spin tip="Loading...">
            <Alert
              message="正在请求电影列表"
              description="精彩内容,马上呈现......"
              type="info"
            />
          </Spin>
        }else{
            //记载完成
            return <div style={{display:'flex',flexWrap:'wrap'}}>
                {this.state.movies.map(item=>{
                    return <MovieItem {...item} key={item.id} history={this.props.history}></MovieItem>
                       
                    
                })}

                {/* 分页 */}
                <div style={{width:'100%'}}>
                    <Pagination defaultCurrent={this.state.nowPage} total={this.state.total} pageSize={this.state.pageSize} onChange={this.pageChanged} />

                </div>

                </div>

        }
    }
    //页码改变
    pageChanged=(page)=>{
        window.location.href='/#/movie/'+this.state.movieType+'/'+page
    }
    
}