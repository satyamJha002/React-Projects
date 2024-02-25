import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { TbTrashFilled } from "react-icons/tb";
import { RiEditCircleFill } from "react-icons/ri";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclosure from "../hooks/useDisclosure";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Successfully Deleted");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        key={contact.id}
        className="bg-yellow flex justify-between items-center p-2 rounded-lg"
      >
        <div className="flex gap-3">
          <FaUserCircle className=" text-4xl text-orange" />
          <div className="text-xl">
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-3xl">
          <RiEditCircleFill onClick={onOpen} className="cursor-pointer" />
          <TbTrashFilled
            onClick={() => deleteContact(contact.id)}
            className="text-purple cursor-pointer"
          />
        </div>
      </div>
      <AddAndUpdateContact
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default ContactCard;
