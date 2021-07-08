
export interface Item {
    id : String;
    ParentId : String ;
    Display : String ;
}

export const items : Item[]= [

    {id:"1",ParentId:"",Display:"a"},
    {id:"2",ParentId:"1",Display:"a-1"},
    {id:"3",ParentId:"2",Display:"a-1-1"},
    {id:"4",ParentId:"",Display:"b"},
    {id:"5",ParentId:"",Display:"c"},
    {id:"6",ParentId:"",Display:"d"},
    {id:"7",ParentId:"6",Display:"d-1"},
]