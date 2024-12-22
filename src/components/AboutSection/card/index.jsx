function Card(props) {
  const {text, designation} = props;
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold ">{designation}</h1>
        <p className="">{text}</p>
      </div>
    </>
  );
}

export default Card;
