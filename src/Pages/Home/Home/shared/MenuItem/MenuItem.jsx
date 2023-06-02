
const MenuItem = ({ item }) => {
  const { image, recipe, price, name } = item;
  return (
    <div className="flex space-x-2">
      <img style={{borderRadius:'0 200px 200px 200px'}} src={image} alt="" className="w-[100px]" />
      <div>
        <h3 className="uppercase">{name}</h3>
        <p className="text-yellow-500">{price}</p>
        <div>
          <p >${recipe}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
