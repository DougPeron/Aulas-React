function Onlineoffline({ isOnline = true }) {
  const className = isOnline ? "text-green-500" : "text-red-500";
  return <span className={className}>{isOnline ? "Online" : "Offline"}</span>;
}

export default Onlineoffline;
