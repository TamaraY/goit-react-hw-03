import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

const ContactList = ({ data, handleDelete }) => {
  return (
    <div>
      <ul className={style.list}>
        {data.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
