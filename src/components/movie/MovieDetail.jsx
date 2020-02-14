import React from 'react'
import { Button, Icon } from 'antd';

export default class MovieDetail extends React.Component {
    constructor(propos) {
        super(propos)
        this.state = {
            info:{}
        }
    }
    componentWillMount(){
        console.log(this.props.match.params.id)
    }
    render() {
        return <div>
                <Button type="primary" onClick={this.goBack}>
                    <Icon type="left" />
                    Go back
                </Button>
    <h1>detail-{this.props.match.params.id}</h1>
            </div>


    }
    goBack=()=>{
        this.props.history.go(-1)
    }
}