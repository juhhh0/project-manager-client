import { ApolloError } from "@apollo/client";

type Props = {
  error: ApolloError | undefined;
};

const ErrorMessage: React.FC<Props> = ({ error }) => {
  if (error) {
    return <p className="text-red-600 pt-2">{error.message}</p>;
  }
};

export default ErrorMessage;
