type Person = {
  name: string;
  imageId: string;
};

type AvatarProps = {
  person: Person;
  size: number;
};

// コンポーネント定義側は、単に関数引数でPropsを定義できる
function Avatar(props: AvatarProps) {
  const { person, size } = props;

  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function getImageUrl(person: Person, size = "s") {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

// Propsを渡す側は、JSXにおける属性値をJSの値として与えるようにするだけで良い
export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
      <Avatar
        size={80}
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
      />
      <Avatar
        size={50}
        person={{
          name: "Lin Lanying",
          imageId: "1bX5QH6",
        }}
      />
      <Card>
        <Avatar // ネストしたコンポーネントはchildrenで受け取る
          size={50}
          person={{
            name: "Lin Lanying",
            imageId: "1bX5QH6",
          }}
        />
      </Card>
    </div>
  );
}

// childrenで親からネストして渡されたJSXコンポーネントを受け取る
type CardProps = {
  children: JSX.Element;
};

// children propを持つコンポーネントは、その親コンポーネントが任意のJSXで
// 「埋める」ことができる「穴」を持っていると考えられる
function Card(props: CardProps) {
  const { children } = props;
  return <div className="card">{children}</div>;
}
