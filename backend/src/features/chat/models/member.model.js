const prisma = require("../../../../config/prisma");

const memberModel = {
  createMemberOfChat: async (members, chatId) => {
    const _members = members.map((member) => {
      return {
        chatId: chatId,
        userId: member,
      };
    });

    const result = await prisma.member.createMany({
      data: _members,
    });

    return result;
  },
};

module.exports = memberModel;
