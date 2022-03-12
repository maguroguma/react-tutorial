type ItemProp = {
  name: string;
  isPacked: boolean;
};

// Reactでは、条件付きレンダリングが単なるJSのif文で表現できる
// 何もレンダリングしたくない場合はnullを返すようにすれば良い
// ただし、実際にはnullを返すのは好ましくないため、親側で制御するほうがよい
function Item(props: ItemProp) {
  const { name, isPacked } = props;

  /*
  if (isPacked) {
    // return <li className="item">{name} ✔</li>;
    return null;
  }
  return <li className="item">{name}</li>;
  */

  return <li className="item">{isPacked ? <del>{name + " ✔"}</del> : name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
