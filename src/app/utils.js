export const generateBaseURL = () => {
  const currentHost = window?.location?.host || "localhost:8001";
  const currentProtocol = window?.location?.protocol || "http:";
  const baseURL = `${currentProtocol}//${currentHost.replace(
    "8001",
    "8080"
  )}/api/todo`;
  return baseURL;
};
