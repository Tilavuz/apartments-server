import mongoose from "mongoose";

export const connectdb = () => {
    mongoose
      .connect("mongodb://localhost:27017/apartments")
      .then(() => {
        console.log("Connected the base!");
      })
      .catch((error) => {
        console.log("Error: Disconnected the base!", error);
      });
  };
  