import NetInfo from "@react-native-community/netinfo";

export const checkNetworkConnection = async () => {
  const { isConnected } = await NetInfo.fetch();

  return isConnected;
};
