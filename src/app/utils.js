export const generateBaseURL = () => {
  const currentHost = window?.location?.host || "localhost:8001";
  const currentProtocol = window?.location?.protocol || "http:";
	const baseURL = `${currentProtocol}//${currentHost.replace(
	currentHost.match(/8001/)?"8001": "8000",
    "8080"
  )}/api/todo`;
	console.log(baseURL)
  return baseURL;
};
