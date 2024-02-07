import { useEffect, useState } from "react";

function UsingHooks(props) {

    const name = useState()

    useEffect(() => {

        return () => {

        }
        
    }, [])

    useEffect(() => {

    }, [name, props.age])
    return ( <div>

    </div> );
}

export default UsingHooks;