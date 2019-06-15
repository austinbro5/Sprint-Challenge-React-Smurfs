import react, {componet} from 'react'
class smurfform extends componet{
    render(){
        return(
            <div classname="smurfform">
                {''}
                <form onsubmit={this.props.addsmurf}>
                    <input
                    onchange={this.props.handleinputchange}
                    placeholder="name"
                    value={this.props.name}
                    name="name"
                    />
                    <input 
                    onchange={this.props.handleinputchange}
                    placeholder="age"
                    value={this.props.age}
                    name="age"
                    />
                    <input
                    onchange={this.props.handleinputchange}
                    placeholder="height"
                    value={this.props.height}
                    name="height"
                    />
                    <button type="submit">add to the village</button>
                </form>
            </div>
        );
    }
}
 export default smurfform;
