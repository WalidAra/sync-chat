import { useParams } from "react-router-dom";
import MainView from "../components/atoms/MainView";
import MainViewLayout from "../components/layouts/MainViewLayout";

const Chats = () => {
  const { chatId } = useParams();

  return (
    <MainViewLayout chatId={chatId as string}>
      <MainView> </MainView>
    </MainViewLayout>
  );
};

export default Chats;
