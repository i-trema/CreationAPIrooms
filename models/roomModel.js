import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, /// permet de supprimer les espaces de fin automatiquement
    lowercase: true,
  },
  maxPersons: {
    type: Number,
    default: 1,
    validate: (value) => {
      if (value <= 0) {
        throw new Error(
          "La chambre doit pouvoir accueillir au moins une personne."
        );
      }
    },
  },
});

///////------création d'un model "Room" en utilisant le Schema "RoomSchema" :
const Room = mongoose.model("Room", RoomSchema);

//////-------on exporte le model :
export default Room;
