import React from "react";
import { DropdownToggle, DropdownMenu, UncontrolledDropdown, DropdownItem } from "reactstrap";

/*
	<EasyDropdown items={["Curricula", "client"]} onSelected={(wt:string)=>this.setState({workType:wt})}/>

	this dropdown menu works on items where each item is a string

	onSelected(item:string) is called when the dropdown is chaneged
*/
export class EasyDropdown extends React.Component<any,any>
{
	constructor(props:any)
	{
		super(props)
		this.state={
			selectedItem:"not set yet",
			items:[],
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
		return(
			<UncontrolledDropdown>
				<DropdownToggle caret>{this.state.selectedItem}</DropdownToggle>
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
		)
	}
}