import { useParams } from "react-router-dom";
import MainView from "../components/atoms/MainView";
import MainViewLayout from "../components/layouts/MainViewLayout";

const GroupChats = () => {
  const { groupId } = useParams();

  return (
    <MainViewLayout chatId={groupId as string}>
      <MainView></MainView>
    </MainViewLayout>
  );
};

export default GroupChats;
