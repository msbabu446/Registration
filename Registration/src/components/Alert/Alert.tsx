type TAlert = "error" | "success" | "info";

interface IAlert {
  message: string;
  type: TAlert;
}

// styles
import "./Alert.scss";

function Alert({ message = "", type = "error" }: IAlert) {
  return <div className={`alertContainer ${type}`}>{message}</div>;
}

export default Alert;
