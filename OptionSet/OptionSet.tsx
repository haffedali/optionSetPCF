import * as React from "react";
import { Dropdown, IDropdownOption } from "office-ui-fabric-react";

interface IOptionSetProperties {
  options: IDropdownOption[];
  selectedKey: number | null;
  onSelectedChanged: (
    event: React.FormEvent<HTMLDivElement>,
    option?: IDropdownOption
  ) => void;
}

export default class FilteredOptionSetControl extends React.Component<
  IOptionSetProperties,
  {}
> {
  render() {
    return (
      <Dropdown
        placeHolder="~~Select one noob~~"
        options={this.props.options}
        selectedKey={this.props.selectedKey}
        onChange={this.props.onSelectedChanged}
      />
    );
  }
}
