import {items} from '../data/index'
import { TreeItem } from './TreeItem'
export default function TreeView() {
    const ParentItems = items.filter( v => v.ParentId == "" )
    return (
        <div className="p-20">
            {ParentItems.map( v => (
                <TreeItem item={v} items={items} />
            ))} 
        </div>
    )
}