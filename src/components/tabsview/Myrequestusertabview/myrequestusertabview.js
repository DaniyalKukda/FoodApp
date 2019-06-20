import React from 'react';
import { Tabs } from 'antd';
import Progress from './status/status'

const { TabPane } = Tabs;
class Myrequestusertabview extends React.Component{
    constructor() {
        super()
        this.state = {
            data: [
                {
                    title: 'random1',
                    description: "Impostor Syndrome is a pervasive feeling of self-doubt, insecurity, or fraudulence",
                    status: 'delivered',
                },
                {
                    title: 'random1',
                    description: "Impostor Syndrome is a pervasive feeling of self-doubt, insecurity, or fraudulence",
                    status: 'inprogress',
                },
                {
                    title: 'random1',
                    description: "Impostor Syndrome is a pervasive feeling of self-doubt, insecurity, or fraudulence",
                    status: 'pending',
                },
                {
                    title: 'Rnfom22',
                    description: "Impostor Syndrome is a pervasive feeling of self-doubt, insecurity, or fraudulence",
                    status: 'inprogress',
                },
                {
                    title: 'random1',
                    description: "Impostor Syndrome is a pervasive feeling of self-doubt, insecurity, or fraudulence",
                    status: 'inprogress',
                },

                {
                    title: 'random1',
                    description: "Impostor Syndrome is a pervasive feeling of self-doubt, insecurity, or fraudulence",
                    status: 'inprogress',
                },
                {
                    title: 'random1',
                    description: "Impostor Syndrome is a pervasive feeling of self-doubt, insecurity, or fraudulence",
                    status: 'inprogress',
                },
                {
                    title: 'random1',
                    description: "Impostor Syndrome is a pervasive feeling of self-doubt, insecurity, or fraudulence",
                    status: 'inprogress',
                },
                {
                    title: 'delivered',
                    description: "Impostor Syndrome is a pervasive feeling of self-doubt, insecurity, or fraudulence",
                    status: 'inprogress',
                },
                {
                    title: 'delivered',
                    description: "Impostor Syndrome is a pervasive feeling of self-doubt, insecurity, or fraudulence",
                    status: 'inprogress',
                },
                {
                    title: 'delivered',
                    description: "Impostor Syndrome is a pervasive feeling of self-doubt, insecurity, or fraudulence",
                    status: 'delivered',
                },

            ]
        }
    }
    render(){
        return(
            <div className="card-container">
            <Tabs type="card">
              <TabPane tab="All Request" key="1">
                <Progress type="all" data={this.state.data} />
              </TabPane>
              <TabPane tab="Pending" key="2">
              <Progress type="pending" data={this.state.data} />
              </TabPane>
              <TabPane tab="In Progress" key="3">
              <Progress type="inprogress" data={this.state.data} />
              </TabPane>
              <TabPane tab="Delivered" key="4">
              <Progress type="delivered" data={this.state.data} />    
              </TabPane>
            </Tabs>
          </div>
        )
    }

}
export default Myrequestusertabview