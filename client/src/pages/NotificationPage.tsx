import React, { useEffect, useState } from "react";
import { Box, Heading, Text, VStack, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";

interface Notification {
  content: string;
  senderId: string;
  chatId: string;
}

const NotificationsPage: React.FC = () => {
  const { token } = useAuth();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          "http://localhost:2000/api/user/private/notifications",
          {
            headers: {
              "sync-token": token,
            },
          }
        );

        setNotifications(response.data.data);
      } catch (err) {
        console.error("An error occurred while fetching notifications.");
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      getData();
    }
  }, [token]);

  if (loading) {
    return (
      <Box ml={14} maxW="3xl" mx="auto" py={10}>
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <Box mx="auto" py={10}>
      <Heading as="h1" mb={6}>
        Notifications
      </Heading>
      <VStack spacing={4}>
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <Box p={4} borderWidth={1} borderRadius="md" width="100%">
              <Text>{notification.content}</Text>
            </Box>
          ))
        ) : (
          <Text>No notifications found</Text>
        )}
      </VStack>
    </Box>
  );
};

export default NotificationsPage;
