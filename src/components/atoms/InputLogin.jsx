
export const InputLogin = ({ data, handleOnchange }) => {
  const { type, name, id, placeholder, value } = data;
  return (
      <input type={type} name={name} id={id} placeholder={placeholder} value={value} onChange={handleOnchange} />
  );
}
