import React from 'react';

export class dateComponent extends React.Component {
    constructor() {
        super();
        let today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
            year = today.getFullYear();
        this.state = {
            date: date,
            year: year
        };
    }
    render() {
        return (
            <div className='date'>
                {this.props.type === 'year' ? this.state.year : this.state.date}
            </div>
        );
    }
}
export default dateComponent;