import style from "./ContactList.module.css";

const List = ({ data, handleDelete }) => {
  return (
    <div className={style.listContact}>
      <ul className={style.list}>
        {data.map((contact) => (
          <li key={contact.id} className={style.item}>
            <div className={style.contact}>
              <p className={style.contactText}> {contact.name}</p>
              <p className={style.contactText}> {contact.number}</p>
            </div>
            <button
              className={style.btn}
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
