
export const InputLogin = ({ data, handleOnchange, valid }) => {
  const { type, name, id, placeholder, value } = data;
  
    return (
        <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={handleOnchange}
            pattern="[A-Za-z0-9]{8,20}"
            required
        // className={valid}
        style={{color: valid}}
        />
    );
};
