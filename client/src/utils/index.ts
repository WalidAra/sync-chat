export function formatDateTime(isoString: string) {
  const date = new Date(isoString);
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  // Convert to a readable format
  const formattedTime = date.toLocaleString("en-US", options);

  // Remove any space before AM/PM
  return formattedTime.replace(" ", "");
}

export const config = {
  public: ["/auth/login", "/auth/register"],
  private: ["/", "/chats", "/friend-requests", "/find-friends"],
};
