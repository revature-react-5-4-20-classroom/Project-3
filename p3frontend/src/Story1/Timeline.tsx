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
            batches: [new Batch(1,'4/4/2020','6/10/2020',false,78,[new Trainer(1,"Adam","King","ak@gmail.com",1,new TrainerSkills(1,"Java",[new Skill(1,"Java")]))],new Location(1,"New York"),new Curriculum(1,'Java'),[],[]),
                        new Batch(2,'5/4/2020','7/10/2020',false,78,[new Trainer(2,"Andrew","C","aC@gmail.com",1,new TrainerSkills(2,"JavaScript",[new Skill(1,"JavaScript")]))],new Location(2,"California"),new Curriculum(2,'JavaScript'),[],[]) ],
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
    componentDidMount() {
        //this.setBatches();
        let mappedGroups: any[] = [];
        let mappedItems: any[] = [];

        this.state.batches.map((batch:Batch, index:number) => {
            console.log(batch)
            let group = {
                id: batch.batchId,
                title: batch.curriculum.name
            }
            let item = {
                id: batch.batchId,
                group: batch.batchId,
                title: batch.curriculum.name,
                start_time: new Date(batch.startDate),
                end_time: new Date(batch.endDate),
                // color: 'rgb(158, 14, 206)',
                // selectedBgColor: 'rgba(225, 166, 244, 1)',
                // bgColor : 'rgba(225, 166, 244, 0.6)',
                itemProps:{
                    onDoubleClick: () => { alert('hello')},
                }
            }
            mappedGroups.push(group);
            mappedItems.push(item)
            this.setGroupsAndItems(mappedGroups,mappedItems)
        })
    }

    render() {
        return (
            <div>
                <Timeline  groups={this.state.groups} items={this.state.items} defaultTimeStart={moment().add(-6,'month')} defaultTimeEnd={moment().add(6,'month')}></Timeline>
            </div>
        )
    }
}