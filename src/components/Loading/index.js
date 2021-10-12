import { useLoading, Audio } from "@agney/react-loading";
import "./styles.css";

const Loading = () => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Audio width="50" />,
  });

  return (
    <div className="container-loading">
      <div>
        <span>
          <section {...containerProps}>{indicatorEl}</section>
        </span>
      </div>
    </div>
  );
};

export default Loading;
