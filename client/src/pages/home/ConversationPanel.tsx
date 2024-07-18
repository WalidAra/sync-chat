import { useParams } from "react-router-dom";
import MainViewLayout from "../../components/layouts/MainViewLayout";
import MessageCard from "../../components/molecules/MessageCard";

const ConversationPanel = () => {
  const { chatId } = useParams();

  return (
    <MainViewLayout chatId={chatId as string}>
      <MessageCard isMyMsg={false} />
      <MessageCard isMyMsg={false} />

      <MessageCard isMyMsg={false} />
      <MessageCard isMyMsg={true} />
      <MessageCard isMyMsg={false} />
      <MessageCard isMyMsg={false} />

      <MessageCard isMyMsg={true} />
      <MessageCard isMyMsg={false} />
      <MessageCard isMyMsg={false} />
      <MessageCard isMyMsg={false} />

      <MessageCard isMyMsg={true} />
      <MessageCard isMyMsg={false} />
      <MessageCard isMyMsg={false} />
      <MessageCard isMyMsg={true} />
    </MainViewLayout>
  );
};

export default ConversationPanel;
