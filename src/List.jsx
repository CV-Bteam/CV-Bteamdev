import React from 'react';
import { useDispatch } from "react-redux";
import slice from "./redux/list/listSlice";

const List = (props) => {
  const { item } = props;
  const dispatch = useDispatch();
  const deleteList = () => dispatch(slice.actions.deleteList(item.id));

  return (
    <div>
      {item.title}
      <button onClick={deleteList}>deleteList</button>
    </div>
  )
}

export default List;