function StatelessComponent(props) {
    return ( <div>
        <div className="padding-top">Stateless Component</div>
        <label>Age</label>
        <input type={"number"} onChange={event => props.changeAge(event.target.value)} value={props.age} />
    </div> );
}

export default StatelessComponent;