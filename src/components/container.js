import React from 'react'
import Counter from './counter'

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counts: {},
            hightestCount: 0,
            highestCount: ''
        };
        this.countClicks = this.countClicks.bind(this);
    }

    countClicks(name) {
        this.setState(state => {
            console.log(this.state);
            state.counts[name]
                ? state.counts[name] += 1
                : state.counts[name] = 1;
                
            if (state.counts[name] > state.highestCount) {
                state.highestCount = state.counts[name];
                state.highestCountName = name;
            }

            return state;
            
        })
    }

    render() {
        return (

            <div>
                <h2>{this.state.highestCountName}</h2>
                <Counter 
                    name="★" 
                    count={this.state.counts.one}
                    action={this.countClicks}
                />
                <Counter
                    name="★★"
                    count={this.state.counts.one}
                    action={this.countClicks}
                />
                <Counter 
                    name="★★★" 
                    count={this.state.counts.one}
                    action={this.countClicks}
                />
                <Counter 
                    name="★★★★" 
                    count={this.state.counts.one}
                    action={this.countClicks}
                />
                <Counter 
                    name="★★★★★" 
                    count={this.state.counts.one}
                    action={this.countClicks}
                />
                
            </div>
        );
    }
}