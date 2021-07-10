import { items } from '../data/index'
import { TreeItem } from './TreeItem'
import React from "react"
export default function TreeView() {
    const ParentItems = items.filter(v => v.ParentId == "")
    return (
        <div className="p-20 flex flex-col items-center">
            <div className="pb-10">
                <h1 className="text-2xl"> Tree View </h1>
            </div>
            <div className="h-full w-full">
                {ParentItems.map(v => (
                    <TreeItem item={v} items={items} />
                ))}
            </div>
        </div>
    )
}