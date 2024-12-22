function Card(props) {
  const { name, heading, img, text } = props;
  return (
    <div className="p-10 m-auto flex justify-between rounded-lg">
      <div className="text-black">
        <img src={img} alt="" />
        <div className="flex flex-col gap-2 mt-10">
          <p className="text-2xl text-start font-bold">{heading}</p>
          <p className="text-xl text-start">{text}</p>
          <p className="text-start">{name}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;