import { useState, useEffect } from "react";
import { useParams } from "react-router";
import RoomCard from "./RoomCard";
import RoomForm from "./RoomForm";

const Room = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await window.fetch(`/rooms/${id}`);
      const json = await data.json();
      // console.log(json);
      setRoom(json);
      // console.log(room);
    };

    fetchData();
  }, []);

  return room ? (
    <div>
      <RoomCard room={room} />
      <h2>Editer</h2>
      <RoomForm room={room} />
    </div>
  ) : null;
};

export default Room;
