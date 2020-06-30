import React from 'react'
import Timeline from 'react-calendar-timeline'
import moment from 'moment';
import 'react-calendar-timeline/lib/Timeline.css'
import { Batch } from '../models/Batch';
import { getAllBatches } from '../api/batch';
import { Trainer } from '../models/Trainer';
import { TrainerSkills } from '../models/TrainerSkills';
import { Skill } from '../models/Skill';
import { Location } from '../models/Location';
import { Curriculum } from '../models/Curriculum';
import { Associate } from '../models/Associate';
import { allTheMapStateToProps } from '../redux/reducers';
import { allTheActionMappers } from '../redux/action-mapper';
import { connect } from 'react-redux';


// interface TimelineComponentProps {
//     batches : Batch[];
// }

interface TimelineComponentState {
    batches: Batch [],
    groups : any[],
    items : any[],
}

export class TimelineComponent extends React.Component<any,TimelineComponentState> {
    constructor(props:any){
        super(props)
        this.state = {
            batches: [],
            groups :[],
            items : []
        }
    }
    
    // itemRenderer = ({item, itemContext, getItemProps, getResizeProps }) => {
    //     <div {...getItemProps(item.itemProps)}> 
    //         <div className="rct-item-content">
    //             {item}
    //         </div>    
    //     </div>
    // }

    setBatches  = async () => {
        this.setState({
            batches  : await getAllBatches()
        })
    }

    setGroupsAndItems = (groups:any[],items:any[]) => {
        this.setState({
            groups : groups,
            items : items,
        })
    }
    async componentDidMount() {
        await this.setBatches();
        let mappedGroups: any[] = [];
        let mappedItems: any[] = [];

        this.state.batches.map( async (batch:Batch, index:number) => {
            let group = {
                id: batch.batchId,
                title: `Batch ID: ${batch.batchId}`
            }
            let item = {
                id: batch.batchId,
                group: batch.batchId,
                title: batch.curriculum.name,
                start_time: new Date(batch.startDate),
                end_time: new Date(batch.endDate),
                canMove: false,
                canResize: false,
                canChangeGroup: false,
                // color: 'rgb(158, 14, 206)',
                // selectedBgColor: 'rgba(225, 166, 244, 1)',
                // bgColor : 'rgba(225, 166, 244, 0.6)',
                itemProps:{
                    onDoubleClick: () => { alert('hello')},
                }
            }
            mappedGroups.push(group);
            mappedItems.push(item)
            await this.setGroupsAndItems(mappedGroups,mappedItems)
        })
    }

    

    render() {
        return (
            <div>
                <Timeline  groups={this.state.groups} items={this.state.items} defaultTimeStart={moment().add(-6,'days')} defaultTimeEnd={moment().add(6,'days')}></Timeline>
            </div>
        )
    }
}

export const TimelineRedux = connect(allTheMapStateToProps, allTheActionMappers)(TimelineComponent)