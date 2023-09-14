import { Draggable } from "@hello-pangea/dnd";
import { useRef } from "react";
import { v4 as uuid } from "uuid";
import "../css/SingleColor.css";

const SingleColor = ({ index, color }) => {
  const genID = useRef(uuid());
  const colorId = genID.current;
  const { r, g, b } = color;

  return (
    <Draggable key={colorId} draggableId={colorId} index={index}>
      {(provided) => {
        const listItemStyle = {
          ...provided.draggableProps.style,
          backgroundColor: `rgb(${r}, ${g}, ${b})`,
        };
        return (
          <li
            className="draggable"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            style={listItemStyle}
          >
            rgb({color.r}, {color.g}, {color.b})
          </li>
        );
      }}
    </Draggable>
  );
};

export default SingleColor;
