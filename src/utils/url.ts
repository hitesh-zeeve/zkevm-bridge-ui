export const getBreakdownUrl = (rpcUrl: string): {password: string, url: string, user: string} => {
  const [protocol, url] = rpcUrl.split("://");
  const [user, password] = url.split("@")[0].split(":");
  const finalUrl = protocol + "://" + url.split("@")[1];

  return {
    password,
    url: finalUrl,
    user,
  }
};
