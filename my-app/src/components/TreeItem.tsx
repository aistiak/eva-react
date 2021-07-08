import { useState } from "react";
import { Item } from "../data/index";
const t: Item = {
  id: "",
  ParentId: "",
  Display: "",
};
interface PropType {
  item: Item;
  items: Item[];
}
export function TreeItem({ item, items }: PropType) {
  const childItems = items.filter((v) => v.ParentId == item.id);
  const [state, setState] = useState({
    isCollapsed: false,
  });
  return (
    <div className="flex flex-col">
      <div className="flex flex-row p-3 items-center border-2" >
        <div className="mr-4">

            <h1>{item.Display}</h1>
        </div>
        <div>
            {childItems.length != 0 && (
            <button
                className="text-black "
                onClick={() =>
                setState({ ...state, isCollapsed: !state.isCollapsed })
                }
            >
               {!state.isCollapsed ? <> &darr; </> : <>&uarr;</>}
            </button>
            )}
        </div>
      </div>
      <div className="ml-6">
        {state.isCollapsed && (
          <div>
            {childItems.map((v) => (
              <TreeItem item={v} items={items} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
