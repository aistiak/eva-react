
import React, { useEffect, useState } from "react"
import List from "./List"
import Detail from "./Detail"

export default function Main() {
    
    const [state,setState] = useState({
        page : 0 ,
        reponame : '' ,
        owner : `` ,
    })
    useEffect(()=>{
        console.log(state)
    },[state])
    const setPage :Function= (arg:number) => setState({...state,page:arg})
    const setParentState : Function = (payload:any) => setState({...state,...payload}) 
    // @ts-ignore
    const setRepoData : Function = ({owner,reponame}) => setState({...state,owner:owner,reponame:reponame})
    return (
        <div>
            { state.page == 0 && <List setParentState={setParentState} /> }
            { state.page == 1 && <Detail setParentState={setParentState} reponame={state.reponame}  owner={state.owner} />}
        </div>
    )
}