import React from "react";
import { EasyTooltip } from "./EasyTooltip";
import { DropdownToggle, DropdownMenu, UncontrolledDropdown, DropdownItem } from "reactstrap";

/*
	<EasyDropdown 
		items={["Curricula", "client"]} 
		onSelected={(item:string)=>this.setState({parentVar:item})}
		hoverText="Displayed when hovered"
		/>

	this dropdown menu works on items where each item is a string
	hoverText is optional

	When an item is selected the following function is called.
	This may be used to set the state of the parent component.
	item is a string in this case when using EasyDropdown
	onSelected(item:string)
*/

export class EasyDropdown extends React.Component<any,any>
{
	constructor(props:any)
	{
		super(props)
		this.state={
			selectedItem:"not set yet",
			items:[],

			//need a unique id for tooltip to reference this dropdown
			//I'm not super happy with this but I don't know the best way to find a textual unique id
			id:'needsToBeText'+Math.floor(Math.random()*100000) 
		}
	}
	
	setTheItem(item:string)
	{
		this.props.onSelected(item)			//set the item in the parent component
		this.setState({selectedItem:item})	//set the item inside this dropdown, cause re-render
	}

	componentDidMount()
	{
		this.setTheItem(this.props.items[0])
	}

	changeSelection=(event:any)=>
	{
		this.setTheItem(event.currentTarget.value)
	}

	render()
	{
		return(<>
			<UncontrolledDropdown>
				<DropdownToggle caret id={this.state.id}>{this.state.selectedItem}</DropdownToggle>
				<DropdownMenu>

					{
						this.props.items.map((item:string)=>
						{
							return(
								<DropdownItem value={item} onClick={this.changeSelection}>
									{item}
								</DropdownItem>
							)
						})
					}
				</DropdownMenu>
			</UncontrolledDropdown>
			<EasyTooltip target={this.state.id} displayText={this.props.hoverText}/>
			</>)
	}
}