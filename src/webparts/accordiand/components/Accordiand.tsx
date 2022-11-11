import * as React from 'react';
// import styles from './Accordiand.module.scss';
import { IAccordiandProps } from './IAccordiandProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Menu from './functions/NestedAcco';

export default class Accordiand extends React.Component<IAccordiandProps, {}> {
  public render(): React.ReactElement<IAccordiandProps> {
   
    return (
      <div>
           <Menu/>
      </div>
    );
  }
}
