const prisma = require("../../../../config/prisma");

// attachment :{ (file type) type: string, url: string  },

const createAttachments = async (messageId, attachments) => {
  try {
    const attachmentsArr = await prisma.attachment.createMany({
      data: attachments,
    });

    const data = attachmentsArr.map((attachment) => {
      return {
        messageId,
        attachmentId: attachment.id,
      };
    });

    await prisma.messageAttachments.createMany({
      data: data,
    });

    return {
      status: true,
      message: "Attachment created successfully",
      data: null,
    };
    
  } catch (error) {
    console.error(error.message);
    return {
      status: false,
      message: "Internal Server Error",
      data: null,
    };
  }
};

module.exports = {
  createAttachments,
};
