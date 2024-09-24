import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError() as { error: { message: string } };

  return (
    <div className="flex w-screen h-screen text-white justify-center items-center flex-col bg-zinc-900">
      <span className="text-6xl font-bold">Oops!</span>
      <span className="mt-12 text-xl">
        Sorry an unexpected error has occurred.
      </span>
      <span className="mt-4">{error.error.message}</span>
      <Link className="mt-4 cursor-pointer font-bold" to="/thirdStrike">
        Voltar
      </Link>
    </div>
  );
};
