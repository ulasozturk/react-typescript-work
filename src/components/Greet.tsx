type GreetProps = {
  name: string;
  messsageCount?: number;
  isLoggedIn: boolean;
};

export function Greet(props: GreetProps) {
  const { messsageCount = 0 } = props;

  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${messsageCount} unread messages`
          : `Welcome Guest`}
      </h2>
    </div>
  );
}
