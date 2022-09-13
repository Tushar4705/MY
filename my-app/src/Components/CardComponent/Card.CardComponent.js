import {Component} from 'react';
class Card extends Component{
    render(){
        const {monstar} = this.props;
        return( 
            <div>
                {monstar.map((monst)=>(
                    <h1>{monst.name}</h1>
                ))}
            </div>
        );
    }
}
export default Card;
